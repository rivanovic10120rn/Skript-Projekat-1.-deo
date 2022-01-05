'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MissionThreads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate({Missions, Soldiers}) {
      // define association here
      this.belongsTo(Missions, {foreignKey: 'MissionID', as:'missionThread'}),
      this.belongsTo(Soldiers, {foreignKey: 'SoldierID', as: 'sender'})
    }
  };
  MissionThreads.init({
    message: DataTypes.STRING,
    // timestamp: DataTypes.DATE,
    recieved: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'MissionThreads',
  });
  return MissionThreads;
};