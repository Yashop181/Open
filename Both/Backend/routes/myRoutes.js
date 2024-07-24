const express = require('express');
const {stuSave,stuDisplay,stubyid,stuDelete,stuEdit} = require('../controllers/stuController');

const router = express.Router();

router.get('/',stuDisplay);
router.post('/',stuSave);
router.get('/:id',stubyid);
router.delete('/:id',stuDelete);
router.put('/:id',stuEdit);

module.exports = router;
