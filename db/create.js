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

Promise.all(
  Devices.create({ adress: "0x161616", status: 2, type: 13, description: "DESC" }).then((jane) => {
    console.log("Jane's auto-generated ID:", jane.id);
  }),

  Devices.create({ adress: "0xAFAFAF", status: 0, type: 27, description: "DESC DESC" }).then(
    (jane) => {
      console.log("Jane's auto-generated ID:", jane.id);
    }
  )
).then(() => sequelize.close());
