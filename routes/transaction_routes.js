const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const transactionController = require('./controllers/transaction_controller');

router.use(bodyParser.json());

router.post('/getAll',transactionController.getAll);


module.exports = router;
