const QueryDb = require("../../db/QueryDb.js");
const Client = require("../models/ClientsModel.js");
class ClientController {
    constructor() {}

    //GET /api/clients
    async index(req, res) {
        const clients = await Client.findAll();
        console.log("const clients =", clients.rows);

        res.json(clients.rows).status(201);
    }

    //GET /api/clients/:id
    async show(req, res) {
        const client = await Client.findById(req.params.id);
        res.json(client).status(200);
    }

    //POST /api/clients
    async save(req, res) {
        console.log(req.body.name);

        const client = await Client.create(req.body);

        res.json(client).status(201);
    }

    //PUT /api/clients/:id
    async update(req, res) {
        const clientToUpdate = await Client.update(req.params.id, req.body);
        console.log(clientToUpdate);

        res.json(clientToUpdate).status(200);
    }

    //DELETE /api/clients:id
    async delete(req, res) {
        const clientToDelete = await Client.delete(req.params.id);
        if (!clientToDelete) {
            return res.status(404).json({ message: "Not found" });
        }
        res.json({
            message: `foi deletado`,
            operation: clientToDelete,
        });
    }
}

module.exports = new ClientController();
