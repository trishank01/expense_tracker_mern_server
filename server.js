import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import TransactionRouters from "./routes/transactions.js";
import connect from "./database/mongodb.js";

const app = express();
const PORT = 4000;



app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("Hello world");
});


app.use('/' , TransactionRouters);

await connect()


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
