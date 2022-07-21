module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Territory', [
      
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Territory', null, {});
  },
};
