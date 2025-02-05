const QueryDb = require("../../db/QueryDb.js");
class Order {
  constructor(orderRow, populateCustomer, populateProducts) {
    this.id = orderRow.id;
    this.customerId = orderRow.customerId;
    this.total = +orderRow.total;
    this.createdAt = new Date(orderRow.createdAt);
    this.updatedAt = new Date(orderRow.updatedAt);

    // dessa vez nosso construtor incluirá a possibilidade de
    // popular propriedades com dados das tabelas associadas
    this.customer = undefined;
    if (populateCustomer) {
      this.customer = populateCustomer;
    }
    this.orderProducts = undefined;
    if (populateProducts) {
      this.orderProducts = populateProducts;
    }
  }

  static async findAll() {
    const query = await QueryDb.query(`
      SELECT 
        orders.*,
        customers.id  AS customer_id,
        customers.name AS customer_name,
        customers.email AS customer_email,
        customers.created_at AS customer_created_at,
        customers.updated_at AS customer_updated_at
      FROM orders JOIN customers ON customers.id = orders.id;
      `);

    // retorno de uma order
    // {
    //   id: 3,
    //   customer_id: 3,
    //   total: "350.00",
    //   created_at: "2025-02-01 22:15:52.161058",
    //   updated_at: "2025-02-01 22:15:52.161058",
    //   customer_name: "Ana Pereira",
    //   customer_email: "ana.pereira@example.com",
    //   customer_created_at: "2025-02-01 22:15:03.081363",
    //   customer_updated_at: "2025-02-01 22:15:03.081363",
    // }

    const formattedQuery = result.rows.map((row) => {
      const orderRows = {
        id: row.id,
        customerId: row.customer_id,
        total: row.total,
        createdAt: row.created_at,
        updatedAt: row.updated_at,
      };
      const customerRows = {
        customerId: row.customer_id,
        nameCustomer: row.customer_name,
        emailCustomer: row.customer_email,
        createdAt: row.customer_created_at,
        updatedAt: row.customer_updated_at,
      };

      return new Order(orderRows, customerRows);
    });

    return formattedQuery;
  }

  /**
   *@param {number} customerId
   * @param {{ id: number, quantity: number }[]} orderProducts
   */
  static async create(customerId, orderProducts) {
    // começamos obtendo os dados de todos os produtos desse pedido

    const storedOrderProducts = await QueryDb.query(
      `
      SELECT * FROM products WHERE id = ANY($1::int[]);`,
      [orderProducts.map((product) => product.id)] // pega somente o id dos produtos vindo de orderProducts
    );

    console.log("storedOrderProducts:", storedOrderProducts.rows);

    // fazemos a soma do total de cada produto * sua quantidade
    let orderTotal = 0;
    const populatedOrderProducts = storedOrderProducts.rows.map((row) => {
      //para cada linha vinda do banco com os ids dos produtos passados eu faço a soma total
      const { quantity } = orderProducts.find(
        (product) => product.id === row.id
      );
      orderTotal += +row.price * quantity;

      return { product: row, quantity };
    });
    console.log("populatedOrderProducts", populatedOrderProducts);

    // precisamos obter um cliente específico da pool para
    // executar todas as queries da transaction nele

    const dbClient = await getClient();
    let response;
    try {
      await dbClient.query("BEGIN");

      // inserimos o pedido
      const orderCreationResult = await dbClient.query(
        `INSERT INTO orders (customer_id, total) VALUES ($1, $2) RETURNING *;`,
        [customerId, orderTotal]
      );

      const order = new Order(
        orderCreationResult.rows[0],
        null,
        populatedOrderProducts
      );

      // e então salvamos cada produto desse pedido com sua quantidade
      for (const entry of populatedOrderProducts) {
        await dbClient.query(
          `INSERT INTO order_products (order_id, product_id, quantity) VALUES ($1, $2, $3);`,
          [order.id, entry.product.id, entry.quantity]
        );
      }

      // e então fazemos o commit da transaction
      await dbClient.query("COMMIT");
      response = order;
    } catch (error) {
      await dbClient.query("ROLLBACK");
      response = { message: `Error while creating order: ${error.message}` };
    } finally {
      dbClient.release();
    }

    return response;
  }

  // no método findById() incluiremos os dados do cliente e a lista dos produtos
  static async findById(id) {
    const orderResult = await query(
      `SELECT
          orders.*,
          customers.id AS "customer.id",
          customers.name AS "customer.name",
          customers.email AS "customer.email",
          customers.created_at AS "customer.created_at",
          customers.updated_at AS "customer.updated_at"
        FROM orders JOIN customers ON customers.id = orders.customer_id
        WHERE orders.id = $1;`,
      [id]
    );
    const orderProductsResult = await query(
      `SELECT order_products.*, products.*
        FROM order_products JOIN products ON order_products.product_id = products.id
        WHERE order_products.order_id = $1;`,
      [id]
    );

    const orderData = orderResult.rows[0];
    const customer = new Customer({
      id: orderData["customer.id"],
      name: orderData["customer.name"],
      email: orderData["customer.email"],
      created_at: orderData["customer.created_at"],
      updated_at: orderData["customer.updated_at"],
    });

    return new Order(orderData, customer, orderProductsResult.rows);
  }
  static async delete(id) {
    const dbClient = await getClient();
    let result;
    try {
      await dbClient.query("BEGIN");
      await dbClient.query(`DELETE FROM order_products WHERE order_id = $1;`, [
        id,
      ]);
      await dbClient.query(`DELETE FROM orders WHERE id = $1`, [id]);
      await dbClient.query("COMMIT");
      result = { message: "Order deleted successfully" };
    } catch (error) {
      await dbClient.query("ROLLBACK");
      result = { message: "Error while deleting order" };
    } finally {
      dbClient.release();
    }
    return result;
  }
}
module.exports = Order;

/**
   * The constructor function initializes an order object with properties from a database row and the
   * option to populate associated customer and product data.
   * @param orderRow - The `orderRow` parameter is an object that contains information about an order,
   * such as its id, customer id, total amount, creation date, and update date.
   * @param populateCustomer - The `populateCustomer` parameter is a function that can be used to
   * populate the `customer` property of the `Order` object with data from the associated customer
   * table. If the `populateCustomer` parameter is provided and is a function, the `customer` property
   * of the `Order` object will
   * @param populateProducts - The `populateProducts` parameter in the constructor function is used to
   * determine whether or not to populate the `orderProducts` property with data from associated
   * tables. If `populateProducts` is true, the `orderProducts` property will be populated with
   * relevant data; otherwise, it will remain undefined.
   * Uma instancia de Order tera o seguinte estado  se informado os tres parametos:
   * {
  id: 1,
  customerId: 2,
  total: 150.00,
  createdAt: 2023-01-01T00:00:00.000Z,
  updatedAt: 2023-01-01T12:00:00.000Z,
  customer: {
    id: 2,
    name: 'Maria Silva',
    email: 'maria.silva@example.com',
    createdAt: 2023-01-01T00:00:00.000Z,
    updatedAt: 2023-01-01T12:00:00.000Z
  },
  orderProducts: [
    {
      orderId: 1,
      productId: 1,
      quantity: 2,
      createdAt: 2023-01-01T12:00:00.000Z
    },
    {
      orderId: 1,
      productId: 2,
      quantity: 1,
      createdAt: 2023-01-01T12:00:00.000Z
    }
  ]
}
   */
Order.create(1, [
  { id: 1, quantity: 2 },
  { id: 2, quantity: 2 },
]);
