module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Burger.associate = function(models) {
    // associations can be defined here
    models.Burger.hasOne(models.Customer);
  };

  return Burger;
};
