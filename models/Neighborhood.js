const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Neighborhood extends Model {}

Neighborhood.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    zip: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [5],
        }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'neighborhood',
  }
);

module.exports = Neighborhood;