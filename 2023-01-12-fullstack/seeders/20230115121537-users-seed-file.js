"use strict";
const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const userSeed = Array.from({ length: 5 }).map((_, i) => ({
      name: `user${i + 1}`,
      email: `user${i + 1}@example.com`,
      password: bcrypt.hashSync("12345678", bcrypt.genSaltSync(10), null),
      created_at: new Date(),
      updated_at: new Date(),
    }));
    await queryInterface.bulkInsert('Users', [{
      name: 'root',
      email: 'root@example.com',
      password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
      created_at: new Date(),
      updated_at: new Date()
    }, ...userSeed], {})
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
