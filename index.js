const WebSocketClient = require('websocket').client;
const client = new WebSocketClient();
const blockController = require('./raw_transaction_controller');
const mongoose = require('mongoose');
const config = require('./config/config');

mongoose.connect(config.url, { useFindAndModify: false },(err,database) => {
  
    // blockController.pushTx("0000000000000000000d471ea5577a1c42627c943385bb7224bed33553531eaf")
    client.connect('wss://ws.blockchain.info/inv');
    
})




client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});
 
client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function(message) {
        try{
            let data = JSON.parse(message.utf8Data);
            let hash = data.x.hash;
            blockController.pushTx(hash);
        }
        catch(e){
            console.log(e);
        }
    });
    
    function subscribe() {
        if (connection.connected) {
            connection.send(JSON.stringify({"op":"blocks_sub"}));
        }
    }
    subscribe();
});
 





