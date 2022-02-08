const UserController = require('../controllers/userController')

const router = require("express").Router()


router.post('/addUser', UserController.addUser)

router.get('/getAllUser', UserController.getALLUser)

router.get('/getOneUser/:id', UserController.getOneUser)

router.put('/updateUser/:id', UserController.updateUser)

router.delete('/deleteUser/:id', UserController.deleteUser)



module.exports = router