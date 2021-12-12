const express = require("express");

const { Devices } = require("./db");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/devices", async (req, res) => {
  const devices = await Devices.getALL(req.query);

  res.json(devices);
});
app.get("/device", async (req, res) => {
  const devices = await Devices.getOne(req.query);

  res.json(devices);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
