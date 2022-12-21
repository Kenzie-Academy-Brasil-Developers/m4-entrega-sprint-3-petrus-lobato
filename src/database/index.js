import {Client} from 'pg';
import 'dotenv/config'

const database = new Client(
  process.env.NODE_ENV === "test"
    ? {
        user: process.env.DB_USER,
        host: 'localhost',
        database: 'tests_products',
        password: process.env.DB_PASSWORD,
        port: 5432
      }
    : {
        user: process.env.DB_USER,
        host: 'localhost',
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: 5432
      }
);

const startDatabase = async () => {
  await database.connect();
  console.log('Database conectada com postgreSQL')
};

export {database, startDatabase};