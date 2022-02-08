const departementController = require('../controllers/departementController')

const router = require("express").Router()


router.post('/addDepartement', departementController.addDepartement)

router.get('/getAllDepartement', departementController.getALLDepartement)

router.get('/getOneDepartement/:id', departementController.getOneDepartement)

router.put('/updateDepartement/:id', departementController.updateDepartement)

router.delete('/deleteDepartement/:id', departementController.deleteDepartement)



module.exports = router