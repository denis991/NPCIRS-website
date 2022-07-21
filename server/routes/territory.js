const router = require('express').Router();
const { Territory } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const allTerritory = await Territory.findAll();
    res.json(allTerritory);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

module.exports = router;
