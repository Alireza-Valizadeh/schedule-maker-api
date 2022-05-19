import { Client } from "pg";
import { createTableQueries } from "./Queries/tables";
export const dbVersion = 1;
const client: Client = new Client({
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
});
client.connect();
client.query(createTableQueries(dbVersion));
export default client;
