const { Pool } = require("pg");

class QueryDb {
  constructor() {
    this.pool = new Pool({
      connectionString:
        "postgresql://postgres:123456@localhost:5432/node_postgres",
    });
  }

  async query(queryString, params, callback) {
    try {
      return await this.pool.query(queryString, params, callback); // precisa do wait para nao propagar o erro antes de ser tratado aqui.
      //sem esse await estouraria o erro vindo do postgres sem essa funca ter a chance de trata-lo.
    } catch (err) {
      console.error(err.message);
      return null;
    }
  }
}
module.exports = new QueryDb(); // ao exportar a instancia de QueryDb, garanto que  todas as consultas estão sendo feitas sobre o mesmo conjunto de conexões do pool
