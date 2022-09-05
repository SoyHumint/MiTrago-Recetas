const { DataTypes, UUIDV4 } = require("sequelize");


module.exports = (sequelize) => {
   sequelize.define("recipe", {
      id: {
         type: DataTypes.UUID,
         defaultValue: UUIDV4,
         primaryKey: true,
         allownull: false
      },
      name: {
         type: DataTypes.STRING,
         allownull: false
      },
      favorite: {
         type: DataTypes.BOOLEAN,
         allownull: false
      },
      instructions: {
         type: DataTypes.TEXT,
         allownull: false
      },
      category: {
         type: DataTypes.STRING,
         allownull: false
      },
      hasAlcohol: {
         type: DataTypes.BOOLEAN,
         allownull: false
      },
      glass: {
         type: DataTypes.STRING,
         allownull: false
      },
      image: {
         type: DataTypes.STRING,
         allownull: false
      }

   })
} 