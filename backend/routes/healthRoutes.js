const express = require('express');
const router = express.Router();

// Simple ping route - useful while wiring up frontend/backend, and later
// for uptime checks once this gets deployed.
router.get('/', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'ZenFit API is up and running',
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
