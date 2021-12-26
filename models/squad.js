'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Squad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(Soldier, {foreignKey: 'SquadID', as: 'squadmembers'}),
      this.hasOne(Mission, {foreignKey: 'SquadID', as: 'mission'})
    }
  };
  Squad.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Squad',
  });
  return Squad;
};