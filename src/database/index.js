import {Client} from 'pg';
import 'dotenv/config'

const database = new Client(
  process.env.NODE_ENV === "test"
    ? {
        user: process.env.PGUSER,
        host: 'localhost',
        database: 'tests',
        password: process.env.PGPASSWORD,
        port: 5432
      }
    : {
        user: process.env.PGUSER,
        host: 'localhost',
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        port: 5432
      }
);

const startDatabase = async () => {
  await database.connect();
  console.log('Database conectada com postgreSQL')
};

export {database, startDatabase};