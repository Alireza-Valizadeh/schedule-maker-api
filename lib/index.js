"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 9876;
app.listen(PORT, () => {
    console.log("Server started on port:", PORT);
});
//# sourceMappingURL=index.js.map