'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * type: DataTypes.STRING,
    rangedWeapon: DataTypes.STRING,
    meleeWeapon: DataTypes.STRING,
    armourType: DataTypes.STRING,
    hasGrenades: DataTypes.BOOLEAN
     * 
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return queryInterface.bulkInsert('Loadouts', [{
      type: 'HQ',
      rangedWeapon: 'Boltstorm Gauntlet',
      meleeWeapon: 'Master-Crafted Power Sword & Power Gauntlet',
      armourType: 'Mk. X Gravis',
      hasGrenades: true
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('Loadouts', null, {});
  }
};
