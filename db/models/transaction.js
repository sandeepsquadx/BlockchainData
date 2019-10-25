'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
	blockchain : {
		type : String,
		required : true
	},
	symbol : {
		type : String,
		required : true
	},
	transaction_type : {
		type : String,
		required : true
	},
    hash : {
        type : String,
        required : true
    },
    from_address : {
    	type : String,
    	required : true
    },
    to_address : {
    	type : String,
    	required : true
    },from_owner : {
    	type : String
    },
    to_owner : {
    	type : String
    },
    from_owner_type : {
    	type : String
    },
    to_owner_type : {
    	type : String
    },
    timestamp : {
    	type : Number,
    	required : true
    },
    amount : {
    	type : Number,
    	required : true
    },
    amount_usd : {
    	type : Number,
    	required : true
    },
    transaction_count : {
    	type : Number,
    	required : true
    }
})

module.exports = mongoose.model('Transaction', transactionSchema);