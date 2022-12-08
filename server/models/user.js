"use strict";
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    idx: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
