"use strict";
var request = require('request');
const RawTransaction = require('./db/models/raw_transaction.js');
const Transaction = require('./db/models/transaction.js');
const { successResponse, errorResponse, error } = require('./utils/utils');


const pushTx = function(blockHash){
    console.log(blockHash)
    request('https://blockchain.info/rawblock/'+blockHash, (err, resp, data) => {
        if(err) return;

        // console.log(data);

        // console.log(data.tx);  // array of transactions
        var tnxs = JSON.parse(data).tx;
        tnxs.forEach(i => {
            add(i.hash);
        })

    })
}


const add = (transaction_hash) => {
    //add raw transaction
    RawTransaction.create({
        hash : transaction_hash
    })
    .then(transaction => {
        // console.log("transaction == ",transaction);
    })
    .catch((err) => {
        console.log("err = "  ,err);
    })
}

const getAll = () => {
    RawTransaction.find({})
    .then(result => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })
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




module.exports = {
    pushTx
}