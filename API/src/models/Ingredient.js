const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
   sequelize.define("Ingredient", {
      name: {
         type: DataTypes.STRING,
         allownull: false
      },
      description: {
         type: DataTypes.TEXT,
         allownull: false
      },
      itsAlcohol: {
         type: DataTypes.BOOLEAN,
         allownull: false
      }
   })
} 