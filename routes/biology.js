const express = require('express');
const router = express.Router();




const {  getBiologyQuestions} = require('../controller/biologyController');


router.get('/', getBiologyQuestions);

module.exports = router;