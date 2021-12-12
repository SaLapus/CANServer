const Sequelize = require("sequelize");

const sequelize = new Sequelize.Sequelize({
  host: "localhost",
  dialect: "sqlite",
  logging: false,
  dialect: "sqlite",
  storage: "db/database.sqlite",
});

const Devices = sequelize.define(
  "devices",
  {
    adress: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    type: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "devices",
  }
);

module.exports = {
  sequelize,

  Devices,
};
