const QueryDb = require("../../db/QueryDb.js");
class Order {
  constructor(orderRow, populateCustomer, populateProducts) {
    this.id = orderRow.id;
    this.customerId = orderRow.customer_id;
    this.total = +orderRow.total;
    this.createdAt = new Date(orderRow.created_at);
    this.updatedAt = new Date(orderRow.updated_at);

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
    const result = await QueryDb.query(`
      SELECT 
        orders.*,
        customers.id  AS customers_id,
        customers.name AS customers_name,
        customers.email AS customer_email,
        customers.created_at AS customers_created_at,
        customers.updated_at AS customers_updated_at
      FROM orders JOIN customers ON customers.id = orders.id;
      `);
    console.log(result.rows[0]);
    const toReturn = result.rows.map((row) => {
      const customerRows = {
        customerId: row.customer_id,
        nameCustomer: row.customers_name,
        emailCustomer: row.customer_emai,
        created_at: row.customer_created_at,
        updated_at: row.customer_updated_at,
      };

      //   id: 3,
      //   customer_id: 1,
      //   total: "350.00",
      //   created_at: "2025-02-01 19:25:23.127616",
      //   updated_at: "2025-02-01 19:25:23.127616",
      //   customers_id: 3,
      //   customers_name: "Ana Pereira",
      //   customer_email: "ana.pereira@example.com",
      //   customers_created_at: "2025-02-01 19:00:25.078633",
      //   customers_updated_at: "2025-02-01 19:00:25.078633",
      // }
      const orderRows = {
        id: row.id,
        customerId: row.customer_id,
        total: row.total,
        createdAt: row.created_at,
        updatedAt: row.updated_at,
      };
      return new Order(orderRows, customerRows);
    });
    console.log(toReturn[0]);
    return toReturn;
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
Order.findAll();
