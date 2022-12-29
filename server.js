import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import bodyParser from "body-parser";
import Transaction from "./models/Transaction.js";

const app = express();
const PORT = 4000;


app.use(cors())
app.use(bodyParser.json())

await mongoose
  .connect(
    "mongodb+srv://trishank:admin12345@expensetracker.rlbynqz.mongodb.net/?retryWrites=true&w=majority"
  )
  console.log("mongoDB connection is successfull")

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/transaction" , async (req , res) => {
  const transaction = await Transaction.find({})
  res.json({data : transaction})
})

app.post("/transaction", async (req, res) => {
  const {amount , description , date} = req.body
  const transaction = new Transaction({
    amount , description , date
  })
  await transaction.save()
  res.json({message : "Success"})
});


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
