const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const rawTransactionController = require('./controllers/raw_transaction_controller');

router.use(bodyParser.json());

router.post('/add',rawTransactionController.add);


module.exports = router;
