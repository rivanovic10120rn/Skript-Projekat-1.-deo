'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Loadouts', {
      loadoutID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rangedWeapon: {
        type: Sequelize.STRING,
        allowNull: false
      },
      meleeWeapon: {
        type: Sequelize.STRING,
        allowNull: false
      },
      armourType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      grenades: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Loadouts');
  }
};