'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Loadouts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          notEmpty: true,
          isIn: {
            args: [['HQ', 'Sergeant', 'Special Gunner', 'Heavy Gunner', 'Trooper']],
            msg: "Must be one of the available types (case sensitive): HQ ;  Sergeant ; Special Gunner ; Heavy Gunner ; Trooper "
          }
        }
      },
      rangedWeapon: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          notEmpty: true,
        }
      },
      meleeWeapon: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          notEmpty: true,
        }
      },
      armourType: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          notEmpty: true
        }
      },
      hasGrenades: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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