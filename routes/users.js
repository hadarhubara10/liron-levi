var express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUser,
  createUser,
  checkAdmin,
  verifyToken,
  deleteUser,
  editUser,
} = require('../controllers/users');

router.get('/', getAllUsers);
router.get('/:userID', getUser);
router.post('/', createUser);
router.post('/checkAdmin', checkAdmin);
router.post('/verifyToken', verifyToken);
router.delete('/:userID', deleteUser);
router.patch('/:userID', editUser);

module.exports = router;
