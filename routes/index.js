const express = require('express');
const router = express.Router();

/* GET api.*/
// todo

/* GET page. */
router.get('*', (req, res) => {
  res.render('app', { title: 'App' });
});

module.exports = router;
