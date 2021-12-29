'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Missions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate({Squads, MissionThreads}) {
      // define association here
      this.hasMany(MissionThreads, {foreignKey: 'MissionID', as:'messages', onDelete:'cascade'})
      this.belongsTo(Squads, {foreignKey:'SquadID' , as:'assignedSquad'})
    }
  };
  Missions.init({
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    missionStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Missions',
  });
  return Missions;
};