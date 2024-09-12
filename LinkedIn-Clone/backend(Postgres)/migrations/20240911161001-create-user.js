'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('USERs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      additionalName: {
        type: Sequelize.STRING
      },
      Avatar: {
        type: Sequelize.STRING
      },
      Username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      adress: {
        type: Sequelize.STRING
      },
      school: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('USERs');
  }
};