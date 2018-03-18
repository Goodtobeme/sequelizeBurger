module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .createTable("Burgers", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        burger_name: {
          allowNull: false,
          type: Sequelize.STRING
        },
        devoured: {
          allowNull: false,
          type: Sequelize.BOOLEAN
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      })
      .then(function() {
        Burgers.bulkCreate([
          {
            name: "Bacon Double Chesseburger",
            devoured: 0
          },
          {
            name: "Royale Cheeseburger",
            devoured: 0
          }
          {
            name: "Regular Hamburger on Bun",
            devoured: 0
          }
           {
            name: "The Boss",
            devoured: 0
          }

        ]);
      });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable("Burgers");
  }
};
