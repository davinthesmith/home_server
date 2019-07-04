import knex from 'knex';

const {
  POSTGRES_URL,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_POOL_MIN = 1,
  POSTGRES_POOL_MAX = 10,
  POSTGRES_DEBUG
} = process.env;

const config = {
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

export const db = knex(config);