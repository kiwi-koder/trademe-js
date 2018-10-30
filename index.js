const Trademe = require("./TradeMe");
const env = require("env2")("./env.json");

const client = new Trademe({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    oauth_access_token: process.env.OAUTH_ACCESS_TOKEN,
    oauth_token_secret: process.env.OAUTH_TOKEN_SECRET
});

(async () => {
    const result = await client.get("/Listings/Hot");
    console.log(result);
})();
