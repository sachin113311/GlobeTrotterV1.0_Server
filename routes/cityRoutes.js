const express = require('express');
const City = require('../models/City');

const router = express.Router();

// GET all cities
router.get('/cities', async (req, res) => {
  try {
    const cities = await City.aggregate([{ $sample: { size: 4 } }]);
    const i = Math.floor(Math.random() * cities.length);
    const clues = cities[i].clues;
    const cityOption = cities.map(city => city.city);
    const id = cities[i]._id;
    res.json({ clues, cityOption, id });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// submit answer
router.post('/cities/submit-answer', async (req, res) => {
    const { id, selectedAnswer } = req.body;

    try {
        const city = await City.findById(id);

        if (!city) {
            return res.status(404).json({ message: 'City not found' });
        }
        if(city.city.toLowerCase() === selectedAnswer.toLowerCase()){
            res.json({ correct: true , cityData: city });
        } else {
            res.json({ correct: false, cityData: "" });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;
