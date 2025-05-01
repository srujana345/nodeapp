import express from "express";
import cors from "cors";
import { MongoClient ,ObjectId} from "mongodb";
const app = express();
app.use(cors());
app.use(express.json());
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const db = client.db("mernappdb");
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/products", async (req, res) => {
  const products = await db.collection("products").find().toArray();
  res.json(products);
});

app.post("/products", async (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    name: name,
    price: price,
  };
  const products = await db.collection("products").insertOne(newProduct);
  res.json(products);
});
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const products = await db.collection("products").deleteOne({ _id: new ObjectId(id) });
  res.json(products);
});
app.listen(8081, () => {
  console.log("Server started on port 8081");
});