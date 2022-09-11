var express = require('express');
var router = express.Router();
const db = require('../models/index');

/* GET users listing. */
router.get('/', async function(req, res, next) {


  try {
    const query = await db.sequelize.query('SELECT * from Users', {
      raw: true
    });

    console.log(query)
    res.status(200).send(query)

  } catch (error) {
    console.log(error);
  }
  
});

module.exports = router;
