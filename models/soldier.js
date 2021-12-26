'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Soldier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(MissionThread, {foreignKey: 'SoldierID', as:'sentMessages', onDelete: 'cascade'}),
      this.belongsTo(Loadout, {foreignKey: 'LoadoutID', as: 'equippedWith'}),
      this.belongsTo(Squad, {foreignKey: 'SquadID', as: 'squad'})
    }
  };
  Soldier.init({
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
    modelName: 'Soldier',
  });
  return Soldier;
};