'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('companies', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      social: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      open_to: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.DECIMAL(9, 6)
      },
      longitude: {
        type: Sequelize.DECIMAL(9, 6),
      },
      paymentform: {
        type: Sequelize.STRING,
      },
      paymentform2: {
        type: Sequelize.STRING,
      },
      obs: {
        type: Sequelize.STRING,
      },
      ticket: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('companies');
  }
};
