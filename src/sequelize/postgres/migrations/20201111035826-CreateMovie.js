module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Movies', {
      id: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
      },
      originalId: {
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
      ovreview: Sequelize.STRING,
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user: {
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
    await queryInterface.dropTable('Movies');
  },
};
