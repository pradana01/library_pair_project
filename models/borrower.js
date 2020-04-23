'use strict';
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Borrower extends Model {}

  Borrower.init({
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  }, { sequelize })

  Borrower.beforeCreate((instance, options) => {
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(instance.password, salt)
    instance.password = hash
  })
  
  Borrower.associate = function(models) {
    // associations can be defined here
    Borrower.belongsToMany(models.Book, { through: models.borrowedBook });
    Borrower.hasMany(models.borrowedBook);
  };
  return Borrower;
};