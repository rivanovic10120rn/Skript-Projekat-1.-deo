'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Squads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate:{
          notEmpty: true,
        }
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          notEmpty: true,
          isIn: {
            args: [['HQ'], ['Battleline'], ['Dreadnought']],
            msg: "Must be one of the available types (case sensitive): Battleline ; HQ ; Dreadnought "
          }
        }
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          notEmpty: true,
          isIn: {
            args: [['Available'], ['onMission']],
            msg: "Must be one of the available types (case sensitive): Available ; onMission "
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
    await queryInterface.dropTable('Squads');
  }
};