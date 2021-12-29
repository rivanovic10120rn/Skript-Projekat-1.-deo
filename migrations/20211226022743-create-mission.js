'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Missions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING,
        validate:{
          notEmpty: true,
          len: [1,300]
        }
      },
      location: {
        type: Sequelize.STRING,
        validate:{
          notEmpty: true,
        }
      },
      SquadID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      missionStatus: {
        type: Sequelize.STRING,
        validate:{
          notEmpty: true,
          isIn: {
            args: [['Pending', 'Active', 'Successful', 'Failed']],
            msg: "Must be one of the available types (case sensitive): Pending ; Active ; Successful ; Failed "
          }
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
    await queryInterface.dropTable('Missions');
  }
};