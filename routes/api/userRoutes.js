const router = require('express').Router();
const {
  getAllUsers,
  // getUserById,
   createUser
  // updateUser,
  // deleteUser,
  // addFriend,
  // removeFriend
} = require('../../controllers/userController.js');

//router.route('/').get(getUsers).post(createUser);
router.get('/users', getAllUsers);
router.post('/users', createUser);
//router.route('/:userId').get(getSingleUser);

module.exports = router;