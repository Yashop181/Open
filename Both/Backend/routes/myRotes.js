const express = require('express');
const {stuSave,stuDisplay,stuDelete,stuEdit} = require('../controllers/stuController');

const router = express.Router();

router.get("/getdata",stuDisplay);
router.post('/datasave',stuSave);
router.post('/deletedata/:id',stuDelete);
router.post('/stuEdit/:id',stuEdit);

module.exports = router;
