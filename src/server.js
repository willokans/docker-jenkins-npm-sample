const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my awesome app! it works using docker and jenkins");
});

app.listen(3000, function () {
  console.log("app listening on post 3030");
});
