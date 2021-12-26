'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MissionThread extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    toJSON(){
      return {...this.get(), threadID: undefined}
    }

    static associate(models) {
      // define association here
      this.belongsTo(Mission, {foreignKey: 'MissionID', as:'missionThread'}),
      this.belongsTo(Soldier, {foreignKey: 'SoldierID', as: 'sender'})
    }
  };
  MissionThread.init({
    message: DataTypes.STRING,
    timestamp: DataTypes.DATE,
    recieved: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'MissionThread',
  });
  return MissionThread;
};