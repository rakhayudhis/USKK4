const musicalController = require('../controllers/music');
const router = require('express').Router();

router.post('/', musicalController.create);
router.get('/', musicalController.getAll);
router.get('/:id', musicalController.findOne);
router.put('/:id', musicalController.update);
router.delete('/:id', musicalController.delete);

module.exports = router;
