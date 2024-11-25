'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Products', [
      {
      name: 'Estrella Galicia',
      price: 2.70,
      CategoryId:"2",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Guinness',
      price: 4.50,
      CategoryId:"3",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: '1906',
      price: 3.00,
      CategoryId:"4",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'All day',
      price: 4.00,
      CategoryId:"5",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Alhambra',
      price: 2.90,
      CategoryId:"2",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
