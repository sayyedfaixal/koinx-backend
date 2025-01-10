const express = require("express");
const crypto = require("../models/crypto");
const calculateDeviation = require("../utils/calculateDeviation");
const router = express.Router();

// Get latest stats
router.get("/stats", async (req, res) => {
  try {
    const { coin } = req.query;
    const latestRecord = await crypto.findOne({ coin }).sort({ timestamp: -1 });

    if (!latestRecord)
      return res.status(404).json({ message: "Data not found" });

    res.json({
      coin: latestRecord.coin,
      price: latestRecord.price,
      marketCap: latestRecord.marketCap,
      change24h: latestRecord.change24h,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get standard deviation
router.get("/deviation", async (req, res) => {
  try {
    const { coin } = req.query;
    const records = await crypto
      .find({ coin })
      .sort({ timestamp: -1 })
      .limit(100);

    if (!records.length)
      return res.status(404).json({ message: "Data not found" });

    const prices = records.map((record) => record.price);
    const deviation = calculateDeviation(prices);

    res.json({ deviation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
