'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loadouts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate({Soldiers}) {
      // define association here
      this.hasMany(Soldiers, {foreignKey: 'LoadoutID', as: 'armedSoldiers' } );
    }
  };
  Loadouts.init({
    type: DataTypes.STRING,
    rangedWeapon: DataTypes.STRING,
    meleeWeapon: DataTypes.STRING,
    armourType: DataTypes.STRING,
    hasGrenades: DataTypes.BOOLEAN
  }, {
    sequelize,
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt']}
    },
    modelName: 'Loadouts',
  });
  return Loadouts;
};