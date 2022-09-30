const router = require('express').Router();
const { userIdSchemaValidate, profileSchemaValidate, avatarSchemaValidate } = require('../utils/validation');

const {
  getUsers,
  getUser,
  getUserLoggedIn,
  updateProfile,
  updateAvatar,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/me', getUserLoggedIn);
router.get('/:userId', userIdSchemaValidate, getUser);
router.patch('/me', profileSchemaValidate, updateProfile);
router.patch('/me/avatar', avatarSchemaValidate, updateAvatar);

module.exports = router;