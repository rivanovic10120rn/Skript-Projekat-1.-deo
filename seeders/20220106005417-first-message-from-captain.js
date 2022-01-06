'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     return queryInterface.bulkInsert('MissionThreads', [{
      message: 'I speak to the entire 6th Company, we pledge our lives for The Imperium in the name of The Great Angel Sanguinius himself! From today we begin our journey to cleanse Baal\'s home system and beyond!',
      MissionID: '1',
      SoldierID: '1',
      recieved: true,
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     return queryInterface.bulkDelete('MissionThreads', null, {});
  }
};
