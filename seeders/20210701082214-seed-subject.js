'use strict';

let dataSubjects = require("../Subjects.json");

dataSubjects = dataSubjects.map((e) => {
  e.createdAt = new Date();
  e.updatedAt = new Date();
  return e;
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Subjects', dataSubjects, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Subjects', null, {});
  }
};
