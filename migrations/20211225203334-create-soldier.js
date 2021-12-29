'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Soldiers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          notEmpty: true
        }
      },
      tag: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate:{
          notEmpty: true,
          len: [4,5]
        }
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: {
            args: [['HQ', 'Sergeant', 'Special Gunner', 'Heavy Gunner', 'Trooper']],
            msg: "Must be one of the available types (case sensitive): HQ ;  Sergeant ; Special Gunner ; Heavy Gunner ; Trooper "
          }
        }
      },
      SquadID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      LoadoutID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          notEmpty: true,
          isIn: {
            args: [['Active', 'onMission', 'Missing', 'Deceased']],
            msg: "Must be one of the available types (case sensitive): Active ; onMission ; Missing ; Deceased "
          }
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          notEmpty: true,
          len: [8,20]
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
    await queryInterface.dropTable('Soldiers');
  }
};