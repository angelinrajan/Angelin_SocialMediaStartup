const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
    createThought,
  updateThought,
   deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController.js');


router.get('/', getAllThoughts);
router.get('/:thoughtId', getThoughtById);
router.post('/', createThought);
router.delete('/:thoughtId', deleteThought);
router.put('/:thoughtId', updateThought);
router.post('/:thoughtId/reactions', addReaction);
router.delete('/:thoughtId/reactions', removeReaction);

module.exports = router;