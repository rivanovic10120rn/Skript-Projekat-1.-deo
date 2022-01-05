'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MissionThreads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      message: {
        type: Sequelize.STRING,
        validate:{
          notEmpty: true,
          len:[1,300]
        }
      },
      // timestamp: {
      //   type: Sequelize.DATE,
      //   validate:{
      //     isDate: true
      //   }
      // },
      MissionID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      SoldierID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      recieved: {
        type: Sequelize.BOOLEAN,
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