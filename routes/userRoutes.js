const express = require("express");
const router = express.Router();
const User = require("../models/User");

// ✅ Register or Get User
router.post("/register", async (req, res) => {
  const { username } = req.body;

  try {
    let user = await User.findOne({ username });
    if (!user) {
      user = new User({ username });
      await user.save();
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Update Score
router.post("/update-score", async (req, res) => {
  const { username, score } = req.body;

  try {
    let user = await User.findOneAndUpdate(
      { username },
      { score, lastUpdated: Date.now() },
      { new: true }
    );
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Get User by Username
router.get("/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.json({ isSuccessful: false, error: "User not found" });

    res.json({isSuccessful: true,responseData:user});
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
