const { Sequelize } = require("sequelize");

const { Devices } = require("./models");

const sequelize = new Sequelize({
  host: "localhost",
  dialect: "sqlite",
  logging: false,
  dialect: "sqlite",
  storage: "db/database.sqlite",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

sequelize.sync();

module.exports = {
  Devices: {
    availableParams: Object.keys(Devices.rawAttributes).filter(
      (key) => !["createdAt", "updatedAt", "id"].includes(key)
    ),
    
    async getALL(paramsToSearch) {
      if (paramsToSearch) {
        const attrs = this.availableParams;

        let params = {};

        for (const [key, value] of Object.entries(paramsToSearch)) {
          if (attrs.includes(key)) params[key] = value;
        }

        paramsToSearch = params;
      }

      const devices = await Devices.findAll({
        where: paramsToSearch,
      });

      return devices.map((d) => d.get());
    },

    async getOne(paramsToSearch) {
      if (paramsToSearch) {
        const attrs = this.availableParams;

        let params = {};

        for (const [key, value] of Object.entries(paramsToSearch)) {
          if (attrs.includes(key)) params[key] = value;
        }

        paramsToSearch = params;
      }

      const devices = await Devices.findOne({
        where: paramsToSearch,
      });

      return devices.map((d) => d.get());
    },
  },
};
