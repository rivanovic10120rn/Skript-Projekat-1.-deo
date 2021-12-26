'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MissionThreads', {
      threadID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      message: {
        type: Sequelize.STRING
      },
      timestamp: {
        type: Sequelize.DATE
      },
      MissionID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      SoldierID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      recieved: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('MissionThreads');
  }
};