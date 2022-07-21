module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Territories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      p00: {
        type: Sequelize.STRING,
      },
      p01: {
        type: Sequelize.STRING,
      },
      utv: {
        type: Sequelize.STRING,
      },
      p02: {
        type: Sequelize.STRING,
      },
      sp: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Territories');
  },
};
