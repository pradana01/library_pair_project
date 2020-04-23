'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Borrower extends Model {}

  Borrower.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, { sequelize })
  
  Borrower.associate = function(models) {
    // associations can be defined here
    Borrower.belongsToMany(models.Book, {through: models.borrowedBook})
  };
  return Borrower;
};