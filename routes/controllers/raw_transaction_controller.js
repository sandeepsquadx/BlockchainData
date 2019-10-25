"use strict";
var request = require('request');
const RawTransaction = require('../../db/models/raw_transaction.js');
const Transaction = require('../../db/models/transaction.js');
const { successResponse, errorResponse, error } = require('../../utils/utils');




const add = (req, res, next) => {
    //add raw transaction
    RawTransaction.create(req.body);
}

const update = (req,res,next) => {
    //update raw transaction

    request.get("https://api.whale-alert.io/v1/transaction/bitcoin/"+req.params.transaction_hash+"?api_key=M0S2Xhxkm66FCQ9iej3A9btzP9j1Xguv",(err, response, body) => {
            if(err){
                res.send(errorResponse(err));
            }else {
                if(body != null) {
                    transaction = JSON.parse(body);

                    Transaction.create(transaction)
                    .then(transaction => {
                        if(transaction != null){
                            RawTransaction.findOneAndUpdate({hash: req.params.transaction_hash}, {$set:{is_updated : true }})
                        }
                    })
                    .catch((err) => {

                    })
                }
            }
    });
}

const getAll = (req,res,next) => {
    //get all transactions
}



module.exports = {
    add
}