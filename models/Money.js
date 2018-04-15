//this is the puppy model file
const db = require('../db/config');
//bring in the config.js file for puppy_dev database
const Money = {};
//instantiate a new object, Puppy
//Puppy model will interface with puppy_dev database
//puppy_dev has two tables
//puppies table
//opinion table
//define Puppy model methods

Money.findAll = () => {
  return db.query(`SELECT * FROM money`);
};
//return all the saved searches from the money table

module.exports = Money;
