'use strict';

let dataStudents = require('../Students.json');

dataStudents = dataStudents.map((e) => {
  e.createdAt = new Date();
  e.updatedAt = new Date();
  return e;
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Students', dataStudents, {}); 
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Students', null, {});
  }
};
