const dotenv = require('dotenv').config({ path: '../../.env'});

const {
  POSTGRES_URL,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_POOL_MIN,
  POSTGRES_POOL_MAX,
  POSTGRES_DEBUG
} = process.env;

if (!POSTGRES_DB || !POSTGRES_USER || !POSTGRES_PASSWORD) {
  throw Error('Please provide POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD');
}

 module.exports = {
  client: 'pg',
  connection: {
    host: POSTGRES_URL ? POSTGRES_URL : 'localhost',
    hostPort: Number(POSTGRES_PORT),
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    charset: 'utf8',
  },
  pool: { min: Number(POSTGRES_POOL_MIN), max: Number(POSTGRES_POOL_MAX) },
  debug: POSTGRES_DEBUG === 'true',
  migrations: {
    tableName: 'knex_migrations',
  },
};
