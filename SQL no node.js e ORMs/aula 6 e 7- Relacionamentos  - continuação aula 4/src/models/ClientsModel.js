const QueryDb = require("../../db/QueryDb.js");
class Client {
    constructor() {}

    static async findAll() {
        const result = await QueryDb.query(
            `
            SELECT * FROM customers;
            `
        );
        console.log(result.rows[0]);

        return result;
    }

    static async findById(id) {
        const client = await QueryDb.query(
            `
            SELECT * FROM customers WHERE id = $1;
            `,
            [id]
        );

        if (!client.rows[0]) return null;

        return client.rows[0];
    }

    static async create({ name, email }) {
        const result = await QueryDb.query(
            `
            INSERT INTO customers (name,email) VALUES ($1,$2) RETURNING *;
            `,
            [name, email]
        );
        return result.rows[0];
    }

    static async update(id, params) {
        const clientToUpdate = await QueryDb.query(
            `
            SELECT * FROM customers WHERE id= $1;
            `,
            [id]
        );
        console.log(clientToUpdate.rows);

        if (!clientToUpdate.rows[0]) return null;

        Object.assign(clientToUpdate.rows[0], params);

        const dataToUpdate = await QueryDb.query(
            `
            UPDATE customers SET
            name = $1,
            email =$2,
            updated_at = CURRENT_TIMESTAMP
            WHERE id = $3 RETURNING *;
            `,
            [
                clientToUpdate.rows[0].name,
                clientToUpdate.rows[0].email,
                clientToUpdate.rows[0].id,
            ]
        );

        return dataToUpdate.rows[0];
    }
    static async delete(id) {
        console.log("id:", id);

        const toDelete = await this.findById(id);
        if (!toDelete) return null;

        await QueryDb.query(
            `
            DELETE FROM customers WHERE id = $1
            `,
            [id]
        );

        return toDelete;
    }
}
module.exports = Client;
