const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Unit extends Model {}

Unit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    unit_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    unit_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    neighborhood_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'neighborhood',
            key: 'id',
        }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'unit',
  }
);

module.exports = Unit;