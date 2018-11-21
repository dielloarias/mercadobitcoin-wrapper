# MercadoBitcoin-Wrapper 
[Mercado Bitcoin](https://www.mercadobitcoin.com.br) is a brazilian based cryptocurrency exchange for Bitcoin, Litecoin and Ripple trades.

## USAGE
This module covers the public informations API endpoint for Mercado Bitcoin. Trading API will be implemented in the future.

### Public Information API - [documentation](https://www.mercadobitcoin.com.br/api/)

Sample call: 
```javascript
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
```


Please refer to **sample-call.js** file for information on how to use mercadobitcoin-wrapper.

##If you want to donate
***bitcoin:*** 16jGqLTmyxfLiSqJUkiEuPfzzyBN1Yms9v
***litecoin:*** LUBeZA2y2eJaYPC5bAt2x5oLbPPscTEs2T