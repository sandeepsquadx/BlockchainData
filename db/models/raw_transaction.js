'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    hash : {
        type : String,
        required : true
    },
    is_updated : {
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model('Rawtransaction', transactionSchema);