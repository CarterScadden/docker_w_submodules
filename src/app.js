import express from "express";
import oof from "./oof/index.js";

const app = express();

const PORT = 8080;
const HOST = "0.0.0.0";

app.get("/", (req, res) => {
  res.send("Message recieved on /");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

console.log(oof.upper("oof upper"));
