import 'dotenv/config';
import * as express from "express";

const app = express();
const PORT = process.env.PORT || 9876;

app.listen(PORT, () => {
  console.log("Server started on port:", PORT);
});
