const Table = require("./Table");

async function DevicesTable() {
  const res = await fetch("http://127.0.0.1:3000/devices");

  const data = await res.json();

  const table = new Table(data);
  table.render(document.getElementById("root"));
}

module.exports = DevicesTable;
