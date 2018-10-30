const request = require("request-promise-native");

class TradeMe {
    constructor({
        consumer_key,
        consumer_secret,
        oauth_access_token,
        oauth_token_secret
    }) {
        this.options = {
            url_root: "https://api.tmsandbox.co.nz/v1",
            oauth: {
                consumer_key,
                consumer_secret,
                token: oauth_access_token,
                token_secret: oauth_token_secret
            }
        };

        this.request = request.defaults({ oauth: this.options.oauth });
    }

    get(path, params) {
        return this.request({
            method: "GET",
            url: this.__buildUrl(path),
            qs: params
        })
            .then(result => {
                return JSON.parse(result);
            })
            .catch(err => {
                return err;
            });
    }

    post(path, params, body) {
        return this.request({
            method: "POST",
            url: this.__buildUrl(path),
            qs: params,
            json: true,
            body
        })
            .then(result => {
                return JSON.parse(result);
            })
            .catch(err => {
                return err;
            });
    }

    __buildUrl(path) {
        return this.options.url_root + path + ".json?";
    }
}

module.exports = TradeMe;
