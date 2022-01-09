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


     return queryInterface.bulkInsert('Missions', [{
      description: 'The Angel\'s Halo Offensive - perform an exterminatus of the Tyranids in Baal\'s home systems and then the rest of Imperium Nihilus',
      location: 'Imperium Nihilus',
      SquadID: '1',
      missionStatus: 'Active',
      createdAt: "2022-01-09T04:50:25.000Z",
      updatedAt: "2022-01-09T04:50:25.000Z"
    }]);

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('Missions', null, {});
  }
};
