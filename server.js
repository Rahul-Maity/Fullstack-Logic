// const express = require("express");
import express from "express"; //module js term
const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "A first funny joke",
    },
    {
      id: 2,
      title: "A second joke",
      content: "A second funny joke",
    },
    {
      id: 3,
      title: "A third joke",
      content: "A third funny joke",
    },
    {
      id: 4,
      title: "A fourth joke",
      content: "A fourth funny joke",
    },
    {
      id: 5,
      title: "A fifth joke",
      content: "A fifth funny joke",
    },
  ];
  res.send(jokes);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on ${port}`);
});
