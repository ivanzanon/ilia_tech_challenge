module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Translations', {
      id: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      englishName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      overview: Sequelize.TEXT,
      movie: {
        type: Sequelize.STRING,
        allowNull: false,
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Translations');
  },
};
