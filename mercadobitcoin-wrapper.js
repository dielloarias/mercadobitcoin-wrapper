let restify = require("restify-clients");

// 
let BASE_URL = "https://www.mercadobitcoin.net"
let MercadoBitcoin = function(){
    this._client = restify.createJSONClient({
        url: BASE_URL
    });
}

MercadoBitcoin.prototype = {
    /*
     * This method calls Ticker API. Provide currency type (BTC, LTC or XRP) and a callback function to handle its results.
     * Callback must comply with restify-clients get() signature.
     */ 
    ticker: function(currency, callback){
        this._call('ticker', currency, callback);
    },
    
    /*
     * This method calls Orderbook API. Provide currency type (BTC, LTC or XRP) and a callback function to handle its results.
     * Callback must comply with restify-clients get() signature.
     */ 
    orderbook: function(currency, callback){
        this._call('orderbook', currency, callback);
    },
    
    /*
     * This method calls Trades API. Provide currency type (BTC, LTC or XRP) and a callback function to handle its results.
     * Callback must comply with restify-clients get() signature.
     */ 
    trades: function(currency, callback){
        this._call('trades', currency, callback);
    },
    
    _call: function(method, currency, callback){
        let url = "/api/" + currency + "/" + method + "/";
        this._client.get(url, callback);
    }
}

module.exports = function() {
    return MercadoBitcoin;
}