const Product = require("../models/productsModel");

class ProductController {
  constructor() {}

  //GET /api/products
  async index(req, res) {
    const products = await Product.findAll();
    res.json(products).status(201);
  }

  // GET /api/products/:id
  async show(req, res) {
    const product = await Product.findById(req.params.id)
    if (product === null) return res.status(404).json({ message: "Product not found!" })
    res.json(product)
  }



  // POST /api/products/:id
  async save(req, res) {
    const newProduct = await Product.create(req.body);
    
    res.json(newProduct).status(201);
  }


  
  // PUT /api/products/:id
  async update(req, res) {
    const updatedProduct = await Product.update(req.params.id, req.body)
    if (updatedProduct === null) return res.status(404).json({ message: "Product not found!" })
    res.json(updatedProduct)
  }

  //DELETE /api/products/:id
  async delete(req, res) {
    const result = await Product.delete(req.params.id)
    res.json(result)
  }
}

module.exports = new ProductController();
//Se a função precisa ser acessada de fora da classe, como em minhas rotas (route.js) para manipulação de dados recebendo requisições HTTP, eu devo usar métodos públicos.
//Metodo publico: Modifica o estado da instância e é acessível através da instância da classe.Assim devo usar isso caso eu exporte a instanica de classe igual aqui
