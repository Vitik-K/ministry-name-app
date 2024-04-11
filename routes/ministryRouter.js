// import dependencies
const express = require('express');
const router = express.Router();
const {getMinistryData, addMinistry} = require('../controllers/ministryController.js');


// run select query and send render results to ministry view ejs file to display 
router.get("/", getMinistryData);

// post method to write form data to Db to create new ministry
router.post("/", addMinistry);

module.exports = router;