'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Squads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Soldiers, Missions}) {
      // define association here
      this.hasMany(Soldiers, {foreignKey: 'SquadID', as: 'squadmembers'});
      this.hasOne(Missions, {foreignKey: 'SquadID', as: 'mission'});
    }
  };
  Squads.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt']}
    },
    modelName: 'Squads',
  });
  return Squads;
};