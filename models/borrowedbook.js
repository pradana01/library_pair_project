'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class borrowedBook extends Model {}

  borrowedBook.init({
    BookId: DataTypes.INTEGER,
    BorrowerId: DataTypes.INTEGER
  }, { sequelize })
  
  borrowedBook.associate = function(models) {
    // associations can be defined here
  };
  return borrowedBook;
};