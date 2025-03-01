const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cityRoutes = require('./routes/cityRoutes');
const userRoutes = require("./routes/userRoutes");

// Express server
const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/globetrotterDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

app.use('/api', cityRoutes);
app.use("/api/users", userRoutes);
