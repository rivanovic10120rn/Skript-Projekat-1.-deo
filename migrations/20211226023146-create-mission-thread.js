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
          notNull: true,
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
        allowNull: false,
        validate:{
          notNull: true,
          notEmpty: true
        }
      },
      SoldierID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
          notNull: true,
          notEmpty: true
        }
      },
      recieved: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        validate:{
          notNull: true
        }
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