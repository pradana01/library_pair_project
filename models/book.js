'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Book extends Model {}

  Book.init({
    title: DataTypes.STRING,
    stock: DataTypes.INTEGER
  }, { sequelize })
  
  Book.associate = function(models) {
    // associations can be defined here
    Book.belongsToMany(models.Borrower, {through: models.borrowedBook})
  };
  return Book;
};