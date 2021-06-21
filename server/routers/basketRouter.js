const { Router } = require('express');
const router = Router();
const fs = require('fs');

router.route('/sendbasket')
  .post((req, res) => {
    try {
      console.log(req.body);
      res.sendStatus(200);
    }
    catch (err) {
      fs.appendFileSync('./public/errors/errorsLog.txt', String(err));
      res.sendStatus(500);
    };
  });

  module.exports = router;