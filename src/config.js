const env = process.env.NODE_ENV;

const local = {
  env,

  server: process.env.SERVER_PORT,

  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionLimit: 10
  }
};

const config = {
  local
};

export default config[env];
