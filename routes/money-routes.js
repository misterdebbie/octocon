//here are the money routes
const express = require('express');
//import express module
const moneyRouter = express.Router();
//bring in Router()
//instantiate a router object, moneyRouter
//middleware and routing duties are handled by moneyRouter
const moneyController = require('../controllers/money-controller');
//import controller methods from money-controller.js

moneyRouter.get('/', moneyController.findAll);
//when the path/URL requested is '/', map to controller method findall()
//display the users saved searches from the money table in money_dev database
moneyRouter.post('/', moneyController.search);
module.exports = moneyRouter;
