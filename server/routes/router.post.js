let router = require('express').Router();

router.get('/',(req,res) => {
  res.send('Heeey...');
});

module.exports = router;