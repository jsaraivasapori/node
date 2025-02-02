const QueryDb = require("./QueryDb.js");

async function populateDb() {
  // await QueryDb.query(`
  //   INSERT INTO customers (name, email) 
  //   VALUES 
  //     ('Maria Silva', 'maria.silva@example.com'), 
  //     ('João Oliveira', 'joao.oliveira@example.com'),
  //     ('Ana Pereira', 'ana.pereira@example.com'),
  //     ('Carlos Santos', 'carlos.santos@example.com'),
  //     ('Fernanda Lima', 'fernanda.lima@example.com'),
  //     ('Gabriel Costa', 'gabriel.costa@example.com'),
  //     ('Isabela Rocha', 'isabela.rocha@example.com'),
  //     ('Lucas Moreira', 'lucas.moreira@example.com'),
  //     ('Mariana Almeida', 'mariana.almeida@example.com'),
  //     ('Pedro Souza', 'pedro.souza@example.com');

  //   `);

  // await QueryDb.query(`
  //      INSERT INTO orders (id, customer_id, total) 
  //       VALUES 
  //         (3, 1, 350.00), 
  //         (4, 2, 450.00), 
  //         (5, 3, 250.00), 
  //         (6, 4, 300.00), 
  //         (7, 5, 700.00), 
  //         (8, 6, 800.00), 
  //         (9, 7, 450.00), 
  //         (10, 8, 550.00), 
  //         (11, 9, 750.00), 
  //         (12, 10, 900.00);


  //     `);
  // await QueryDb.query(`
  //   INSERT INTO products (name, description, price, stock_quantity) 
  //   VALUES 
  //     ('Notebook', 'Notebook de última geração com 16GB de RAM e 1TB de SSD.', 4500.00, 10),
  //     ('Smartphone', 'Smartphone com câmera de 48MP e 128GB de armazenamento.', 2500.00, 15),
  //     ('Monitor', 'Monitor LED de 27 polegadas com resolução 4K.', 1200.00, 8),
  //     ('Teclado Mecânico', 'Teclado mecânico com iluminação RGB e switches azuis.', 350.00, 20),
  //     ('Mouse', 'Mouse ergonômico com sensor de alta precisão de 16000 DPI.', 150.00, 25),
  //     ('Fone de Ouvido', 'Fone de ouvido sem fio com cancelamento de ruído ativo.', 800.00, 30),
  //     ('Impressora', 'Impressora multifuncional com conexão Wi-Fi e impressão duplex.', 700.00, 12),
  //     ('Cadeira Gamer', 'Cadeira gamer ergonômica com ajuste de altura e inclinação.', 1100.00, 5),
      
  //     ('HD Externo', 'HD externo de 2TB com conexão USB 3.0.', 350.00, 18)
  //   `);
    
  process.exit(0);
}

populateDb();
