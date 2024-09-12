'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class USER extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  USER.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    additionalName: DataTypes.STRING,
    Avatar: DataTypes.STRING,
    Username: DataTypes.STRING,
    email: DataTypes.STRING,
    adress: DataTypes.STRING,
    school: DataTypes.STRING,
    phone: DataTypes.STRING,
    website: DataTypes.STRING,
    company: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'USER',
  });
  return USER;
};