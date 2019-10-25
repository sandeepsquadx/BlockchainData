"use strict";
var request = require('request');
const Transaction = require('../../db/models/transaction.js');
const { successResponse, errorResponse, error } = require('../../utils/utils');



const getAll = (req,res,next) => {
    //get all transactions
}



module.exports = {
    getAll
}