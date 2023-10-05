const express = require("express");
const { connectDb } = require("./dbconfig");

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.json({
    message: "server is running!",
  });
});

app.listen(PORT, async () => {
  await connectDb();
  console.log("log : server started", PORT);
});
