const QueryDb = require("../../db/QueryDb");

class Product {
  //ao instanciar Product, passo o resultado da query no constructor para criar a nova classe.
  // de snake_case passa para camelCase so isso que acontece
  constructor(productRow) {
    this.id = productRow.id;
    this.name = productRow.name;
    this.description = productRow.description;
    this.price = +productRow.price;
    this.stockQuantity = productRow.stock_quantity;
    this.isActive = productRow.is_active;
    this.createdAt = new Date(productRow.created_at);
    this.updatedAt = new Date(productRow.updated_at);
  }
  static async findAll() {
    const result = await QueryDb.query(
      `
      SELECT * FROM products;
      `
    );
    return result.rows.map((row) => new Product(row));
  }

  static async create({ name, description, price, stockQuantity, isActive }) {
    const result = await QueryDb.query(
      `
      INSERT INTO products (name, description, price, stock_quantity, is_active)
      VALUES ($1,$2,$3,$4,$5) RETURNING  *;`,

      [name, description, price, stockQuantity, isActive]
    );
    const toReturn = new Product(result.rows[0]);
    
    return  toReturn
  }
  static async findById(id) {
    console.log(id);
    
    const result = await QueryDb.query(
      `
      SELECT * FROM products WHERE id = $1;
      `,
      [id]
    );
    if (!result.rows[0]) return null
    return new Product(result.rows[0]);
  }
  static async update(id,attributes){
    const { rows } = await QueryDb.query(`SELECT * FROM products WHERE id = $1`, [id])
    if (!rows[0]) return null
  
    const product = new Product(rows[0])

    Object.assign(product, attributes)
    product.updatedAt = new Date()

    await QueryDb.query(
      `UPDATE products SET
        name = $1,
        description = $2,
        price = $3,
        stock_quantity = $4,
        is_active = $5,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $6;`,
      [
        product.name,
        product.description,
        product.price,
        product.stockQuantity,
        product.isActive,
        product.id
      ]
    )

    return product

  }

  static async delete(id) {
    await QueryDb.query(`DELETE FROM products WHERE id = $1`, [id])
    return { message: "Product deleted successfully." }
  }
}
module.exports = Product;
