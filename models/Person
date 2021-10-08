const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Person extends Model {}

Person.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(12),
      allowNull: true,
    },
    cell: {
        type: DataTypes.STRING(12),
        allowNull: true,
    },
    birth_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    unit_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'unit',
            key: 'id',
        }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
          model: 'user',
          key: 'id',
      }
  },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'person',
  }
);

module.exports = Person;