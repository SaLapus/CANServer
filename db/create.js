const { sequelize, Devices } = require("./models");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

Devices.sync();

Promise.all([
  Devices.create({ adress: "0x161616", status: 2, type: 13, description: "DESC" }),

  Devices.create({ adress: "0xAFAFAF", status: 0, type: 27, description: "DESC DESC" }),

  Devices.create({ adress: "0x15ADAF", status: 0, type: 13, description: "DESC DESC DESC" }),
]).then((devices) => {
  devices.forEach((d) => {
    console.log("Device's auto-generated ID:", d.id);
  });
  sequelize.close();
});
