'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loadout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      this.hasMany(Soldier, {foreignKey: 'LoadoutID', as: 'armedSoldiers' } )
    }
  };
  Loadout.init({
    type: DataTypes.STRING,
    rangedWeapon: DataTypes.STRING,
    meleeWeapon: DataTypes.STRING,
    armourType: DataTypes.STRING,
    grenades: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Loadout',
  });
  return Loadout;
};