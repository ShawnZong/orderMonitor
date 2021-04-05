const { Pool, Client } = require("pg");
const config = require("../config");
// const pool = new Pool(config.db);

async function query(query, params) {
  const client = new Client(config.db);
  await client.connect();

  // const { rows, fields } = await pool.query(query, params);
  const { rows, fields } = await client.query(query, params);

  await client.end();
  return rows;
}

module.exports = {
  query,
};
