const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", function (req, res) {
  res.json({
    data: "some response",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`server is running at PORT=${process.env.PORT}`);
});
