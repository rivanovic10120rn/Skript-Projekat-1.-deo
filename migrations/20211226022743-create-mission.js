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
          notNull: true,
          notEmpty: true,
          len: [1,300]
        }
      },
      location: {
        type: Sequelize.STRING,
        validate:{
          notNull: true,
          notEmpty: true
        }
      },
      SquadID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
          notNull: true
        }
      },
      missionStatus: {
        type: Sequelize.STRING,
        validate:{
          notNull: true,
          notEmpty: true,
          missionStatusValidator(value){
            if (value !== 'Active' && value !== 'Pending' && value !== 'Successful' && value !== 'Failed' ){
              throw new Error('Value must be one of the available types (case sensitive): Pending ; Active ; Successful ; Failed ');
            }
          }
          // isIn: {
          //   args: [['Pending'], ['Active'], ['Successful'], ['Failed']],
          //   msg: "Must be one of the available types (case sensitive): Pending ; Active ; Successful ; Failed "
          // }
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