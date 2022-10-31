const express = require("express");

const app = express();

app.use("/benny", (req, res) => {
  res.json({ name: "Benny", age: 7 });
});

app.use("/", (req, res) => {
  console.log("hitting the first route");
  res.send("hello world");
});

app.listen(3000, () => {
  console.log(`🚀  Server started on Port 3000`);
});
