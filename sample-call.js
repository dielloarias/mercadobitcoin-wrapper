// Import mercadobitcoin-wrapper module.
let mercadobitcoinWrapper = require("./mercadobitcoin-wrapper")();

// Instantiate a new Object
let wrapper = new mercadobitcoinWrapper();

// Callback to be provided as result handler
// (please refer to restify-clients get() documentation)
let callback = function (err, req, res, obj) {
    if (err) {
        console.log(err)
        return
    }
    // Print results to console.
    console.log(obj);
    return obj;
}

// API calls
wrapper.ticker("BTC", callback);
wrapper.orderbook("BTC", callback);
wrapper.trades("BTC", callback);