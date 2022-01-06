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
          notNull: true,
          notEmpty: true
        }
      },
      tag: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate:{
          notNull: true,
          notEmpty: true,
          len: [8,10]
        }
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
          typeValidator(value){
            if (value !== 'HQ' && value !== 'Sergeant' && value !== 'Special Gunner' && value !== 'Heavy Gunner' && value !== 'Trooper' ){
              throw new Error('Value must be one of the available types (case sensitive): HQ ; Sergeant ; Special Gunner ; Heavy Gunner ; Trooper ');
            }
          }
        }
      },
      SquadID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
          notNull: true
        }
      },
      LoadoutID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
          notNull: true
        }
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          notNull: true,
          notEmpty: true,
          soldierStatusValidator(value){
            if (value !== 'Active' && value !== 'onMission' && value !== 'Missing' && value !== 'Deceased' ){
              throw new Error('Value must be one of the available types (case sensitive): Active ; onMission ; Missing ; Deceased ');
            }
          }
          // isIn: {
          //   args: [['Active'], ['onMission'], ['Missing'], ['Deceased']],
          //   msg: "Must be one of the available types (case sensitive): Active ; onMission ; Missing ; Deceased "
          // }
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          notNull: true,
          notEmpty: true,
          len: [8,20],
          isAlphanumeric: true
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