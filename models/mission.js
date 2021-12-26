'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      this.hasMany(MissionThread, {foreignKey: 'MissionID', as:'messages', onDelete:'cascade'})
      this.belongsTo(Squad, {foreignKey:'SquadID' , as:'assignedSquad'})
    }
  };
  Mission.init({
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    missionStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mission',
  });
  return Mission;
};