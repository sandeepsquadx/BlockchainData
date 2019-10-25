const raw_transaction_routes = require('./raw_transaction_routes');
const transaction_routes = require('./transaction_routes');


module.exports = function(app) {
	app.use('/rawtransaction',raw_transaction_routes);
	app.use('/transaction',transaction_routes);
	
}


