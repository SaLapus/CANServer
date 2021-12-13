const express = require("express");

const { Devices } = require("./db");

const app = express();
const port = 3000;

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.send("dist/index.html");
});

app.get("/devices", async (req, res) => {
  const devices = await Devices.getALL(req.query);

  res.setHeader("Access-Control-Allow-Origin", "*");

  res.json(devices);
});

app.get("/device", async (req, res) => {
  const devices = await Devices.getOne(req.query);

  res.setHeader("Access-Control-Allow-Origin", "*");

  res.json(devices);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
