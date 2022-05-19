"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express = require("express");
const connection_1 = require("./DataAccess/connection");
const insert_1 = require("./DataAccess/Queries/Users/insert");
const app = express();
const PORT = process.env.PORT || 9876;
app.get("/", async (req, res) => {
    console.log(req.params);
    const result = await connection_1.default.query("SELECT * FROM users");
    return res.send(result);
});
app.get("/insert", async (req, res) => {
    const result = await connection_1.default.query((0, insert_1.default)(connection_1.dbVersion), [
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
//# sourceMappingURL=index.js.map