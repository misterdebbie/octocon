//this is the money controller
const Money = require('../models/Money');
//bring in the money object and methods
//Money will interface with the money_database
const moneyController = {};
//instantiate a controller object

//controller method findAll()
//Money model will query the money_database
//return all the saved searches in monies table
moneyController.findAll = (req,res) => {
  Money.findAll()
    .then(monies => {
      res.json({
        message: 'success',
        data: monies,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({err});
    });
  };

  moneyController.search = (req,res) => {
  axios({
    method: 'GET',
    url: (`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbols=${req.body.symbol}&apikey=${process.env.API_KEY}`),
  })
  .then(allTheDogs => {
    console.log(allTheDogs.data.petfinder.pets)
    res.json({
      message: 'successfully made API call',
      data: allTheDogs.data.petfinder.pets
    })
  })
  .catch(err => {
    console.log('inside puppy finder API call error', err);
  });
};

module.exports = moneyController;
