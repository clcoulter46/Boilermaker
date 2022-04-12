const router = require('express').Router()
const Cat = require('../db/cat');

router.get('/', async (req, res, next) => {
  try {
    const allCats = await Cat.findAll();
    res.send(allCats)
  } catch (err) {
    next(err)
  }
})

module.exports = router;
