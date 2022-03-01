const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Dv1.0 1 Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});