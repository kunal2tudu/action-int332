const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname));

app.get("/api", async (req, res) => {
  const response = await fetch("http://backend:8080");
  const data = await response.text();
  res.send(data);
});

app.listen(3000, () => {
  console.log("Frontend running on port 3000");
});