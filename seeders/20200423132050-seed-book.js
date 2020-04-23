'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Books', [
      {
        title: 'Book of Integrity',
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Book of Solomon',
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Introduction to Quantum Physics',
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'History of the Black Plague',
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Japan, Hiroshima and Nagasaki',
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Books', null, {});
  }
};
