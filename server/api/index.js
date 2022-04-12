const router = require('express').Router();

//for any route, you need to require the folder it's in
//for example, to get to a puppies route, you would put:
//router.use('/puppies', require('./puppies'))

//router.use('cats', require('./cats'))


router.use((req,res,next) => {
  const err = new Error('API ROUTE NOT FOUND!');
  err.status = 404;
  next(err);
})

module.exports = router
