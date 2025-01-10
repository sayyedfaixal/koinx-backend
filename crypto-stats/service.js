const app = require("./src/app");
const fetchCryptoData = require("./src/services/fetchCryptoData");
require("./src/cron");

const PORT = process.env.PORT || 3000;

// Initial fetch
fetchCryptoData();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
