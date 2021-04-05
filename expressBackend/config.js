// local db config
// const env = process.env;

// const config = {
//   db: {
//     /* do not put password or any sensitive info here, done only for demo */
//     host: env.DB_HOST || "localhost",
//     port: env.DB_PORT || "5432",
//     user: env.DB_USER || "web",
//     password: env.DB_PASSWORD || "1",
//     database: env.DB_NAME || "postgres",
//   },
//   listPerPage: env.LIST_PER_PAGE || 10,
// };

// heroku db config
const config = {
  db: {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  },
  listPerPage: 10,
};
module.exports = config;
