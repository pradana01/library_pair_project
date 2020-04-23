'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Book extends Model {
    getTitleAndStock(){
      return `${this.title} (stock: ${this.stock})`
    }
  }

  Book.init({
    title: DataTypes.STRING,
    stock: DataTypes.INTEGER
  }, { sequelize })
  
  Book.associate = function(models) {
    // associations can be defined here
    Book.belongsToMany(models.Borrower, { through: models.borrowedBook });
    Book.hasMany(models.borrowedBook);
  };
  return Book;
};