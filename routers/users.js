const express = require('express')
const router = express.Router()

const {getAllUsers,addUser,deleteUserById,updateUserById}
 =require('../controllers/users')

router.get('/',getAllUsers)
router.post('/',addUser)
// router.post('/:Id',updateUserById)
router.delete('/:Id',deleteUserById)
module.exports = router;