import "dotenv/config";
import * as express from "express";
import client, { dbVersion } from "./DataAccess/connection";
import insertUserQuery from "./DataAccess/Queries/Users/insert";

const app = express();
const PORT = process.env.PORT || 9876;

app.get("/", async (req, res) => {
  console.log(req.params);
  const result = await client.query("SELECT * FROM users");
  return res.send(result);
});

app.get("/insert", async (req, res) => {
  const result = await client.query(insertUserQuery(dbVersion), [
    "ali@glo3d.com",
    "alireza",
    "139142625",
    "male",
  ]);
  return res.send(result);
});
app.listen(PORT, () => {
  console.log("Server started on port:", PORT);
});
