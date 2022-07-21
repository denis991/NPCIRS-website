const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Territory extends Model {
    static associate(models) {
      // define association here
    }
  }
  Territory.init({
    p00: DataTypes.STRING,
    p01: DataTypes.STRING,
    utv: DataTypes.STRING,
    p02: DataTypes.STRING,
    sp: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Territory',
  });
  return Territory;
};
