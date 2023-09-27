const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
   createUser,
  updateUser,
   deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController.js');


router.get('/', getAllUsers);
router.get('/:userId', getUserById);
router.post('/', createUser);
router.delete('/:userId', deleteUser);
router.put('/:userId', updateUser);
router.post('/:userId/friends/:friendId', addFriend);
router.delete('/:userId/friends/:friendId', removeFriend);

module.exports = router;