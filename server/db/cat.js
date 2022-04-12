const Sequelize = require('sequelize');
const db = require('./database')

module.exports = db.define('cat', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  color: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://cdn.discordapp.com/attachments/707818836245872690/953452407789080627/20220315_203757.jpg"
  },
  description: {
    type: Sequelize.STRING
  }
})
