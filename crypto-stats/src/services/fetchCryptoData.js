const axios = require("axios");
const crypto = require("../models/crypto");

const fetchCryptoData = async () => {
  const coins = ["bitcoin", "matic-network", "ethereum"];

  for (const coin of coins) {
    try {
      // Fetch data from CoinGecko API
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`
      );

      const data = response.data[coin];

      console.log(`Fetched data for ${coin}:`, data);

      // Map the fetched data to the schema
      const cryptoData = {
        coin: coin,
        price: data.usd,
        marketCap: data.usd_market_cap,
        change24h: data.usd_24h_change,
      };

      // Save to MongoDB
      // const savedData = await crypto.create(cryptoData);
      // console.log(`Saved data for ${coin}:`, savedData);
    } catch (error) {
      console.error(`Error fetching data for ${coin}:`, error.message);
      console.log("Retrying...");
    }
  }
};

module.exports = fetchCryptoData;
