'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Soldiers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate({Squads, Loadouts, MissionThreads}) {
      // define association here
      this.belongsTo(Loadouts, {foreignKey: 'LoadoutID', as: 'equippedWith'});
      this.belongsTo(Squads, {foreignKey: 'SquadID', as: 'squad'});
      this.hasMany(MissionThreads, {foreignKey: 'SoldierID', as:'sentMessages', onDelete: 'cascade'});
      
    }
  };
  Soldiers.init({
    name: DataTypes.STRING,
    tag: DataTypes.STRING,
    role: DataTypes.STRING,
    SquadID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LoadoutID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt']}
    },
    modelName: 'Soldiers',
  });
  return Soldiers;
};