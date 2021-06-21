const { Router } = require('express');
const router = Router();
const fs = require('fs');
const pseudoDb = require('../pseudoDb/pseudoDb');

router.route('/getallcategories')
  .get((req, res) => {
    try {
      const allCategories = pseudoDb.map(el => el.category);
      res.json(allCategories);
    }
    catch (err) {
      fs.appendFileSync('./public/errors/errorsLog.txt', String(err));
      res.sendStatus(500);
    };
  });

router.route('/getcurrentcategory/:category')
  .get((req, res) => {
    try {
      res.json(pseudoDb[(pseudoDb.findIndex(el => el.category === req.params.category))]);
    }
    catch (err) {
      fs.appendFileSync('./public/errors/errorsLog.txt', String(err));
      res.sendStatus(500);
    };
  });

  module.exports = router;