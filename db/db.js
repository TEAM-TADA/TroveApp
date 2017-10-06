const Sequelize = require('sequelize');
require('dotenv').config();
require('dotenv').load();

const db = new Sequelize('postgres://lqaifgdf:5UU2nXZlIt3LN_biBWrBQhhe9G4aFoPj@elmer.db.elephantsql.com:5432/lqaifgdf', {dialect: "postgres"})

db.authenticate()
.then(() => {
  console.log('Successfully Connected to Database');
})
.catch(err => {
  console.log('Error Occur when Connecting to Database');
})

module.exports = db;