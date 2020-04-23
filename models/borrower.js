'use strict';
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Borrower extends Model {}

  Borrower.init({
    name: {
      type: DataTypes.STRING
      // validate: {
      //   notEmpty: {
      //     msg: 'Nama harus diisi'
      //   }
      // }
    },
    email: {
      type: DataTypes.STRING
      // validate: {
      //   notEmpty: {
      //     msg: 'Email harus diisi'
      //   }
      // }
    },
    password: {
      type: DataTypes.STRING
      // validate: {
      //   notEmpty: {
      //     msg: 'Password harus diisi'
      //   },
      //   len: {
      //     args: [5,10],
      //     msg: 'Password antara 5 - 10 karakter'
      //   }
      // }
    }
  }, { sequelize })

  Borrower.beforeCreate((instance, options) => {
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(instance.password, salt)
    instance.password = hash
  })
  
  Borrower.associate = function(models) {
    // associations can be defined here
  };
  return Borrower;
};