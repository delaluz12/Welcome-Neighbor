const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/connection');
const { beforeUpdate } = require('./User');


class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      },
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'role',
        key: 'id',
      }
    },
    unit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'unit',
        key: 'id',
      }
    },
  },
  {

    hooks: {
      
    beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
   beforeUpdate: async (updatedUserData) => {
     console.log("beforeUpdate",updatedUserData )
    updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
    return updatedUserData;
  },
   
    },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);
module.exports = User;

