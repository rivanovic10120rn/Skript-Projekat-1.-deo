'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     * 
      * Soldier.init({
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
    },
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return queryInterface.bulkInsert('Soldiers', [{
        name: 'Brother-Captain Riangelus Terra',
        tag: 'C-RT10-6',
        role: 'HQ',
        SquadID: '1',
        LoadoutID: '1',
        status: 'Active',
        password: 'MementoMori10'
      }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('Soldiers', null, {});
  }
};
