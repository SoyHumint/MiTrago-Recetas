const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
   sequelize.define("recipe", {
      name: {
         type: DataTypes.STRING,
         allownull: false
      },
      favorite: {
         type: DataTypes.BOOLEAN,
         allownull: false
      }
   })
} 