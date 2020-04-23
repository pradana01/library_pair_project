'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Borrower extends Model {

  }
  Borrower.init ({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize
  });
  Borrower.associate = function(models) {
    // associations can be defined here
  };
  return Borrower;
};