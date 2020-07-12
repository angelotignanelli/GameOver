const express = require('express');
const router = express.Router();
const cartController = require('../controller/cartController');

router.get('/', cartController.index);
router.get('/add/:id', cartController.add);
router.get('/delete/:id', cartController.delete);


module.exports = router;