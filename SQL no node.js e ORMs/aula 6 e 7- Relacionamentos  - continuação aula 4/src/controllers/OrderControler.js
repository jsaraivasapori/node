const Order = require("../models/OrderModel.js");

class OrderController {
  constructor() {}

  async index(req, res) {
    // GET /orders

    const orders = await Order.findAll();
    res.json(orders);
  }

  // POST /orders
  async create(req, res) {
    const newOrder = await Order.create(
      req.body.customerId,
      req.body.products // Array<{ id: number, quantity: number }>
    );

    if (newOrder instanceof Order) {
      res.status(201).json(newOrder);
    } else {
      res.status(400).json(newOrder);
    }
  }

  // GET /orders/:id
  async show(req, res) {
    const order = await Order.findById(req.params.id);
    res.json(order);
  }
  // DELETE /orders/:id
  async delete(req, res) {
    const result = await Order.delete(req.params.id);
    res.json(result);
  }
}
module.exports = new OrderController();
