'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Book extends Model {

  }
  Book.init ({
    title: DataTypes.STRING,
    stock: DataTypes.INTEGER
  }, {
    sequelize
  });
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};