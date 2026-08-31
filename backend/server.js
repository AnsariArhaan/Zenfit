require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const healthRoutes = require('./routes/healthRoutes');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/health', healthRoutes);

// Session 2 onward will mount /api/auth, /api/tracker, /api/workouts,
// /api/supplements, /api/blog here.

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`ZenFit backend running on port ${PORT}`);
});
