const db = require("../models")

const Departement = db.departements


// create departement 
const addDepartement = async (req, res) => {

    let data = {
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
    }

    const departement = await Departement.create(data)
    res.status(200).send(departement)
}

// get all departements

const getALLDepartement = async (req, res) => {
    const departement = await Departement.findAll()
    res.status(200).send(departement)
}
// get single departement 

const getOneDepartement = async (req, res) => {
    let id = req.params.id
    const departement = await Departement.findOne({ where: { id: id } })
    res.status(200).send(departement)
}

// update departement 

const updateDepartement = async (req, res) => {
    let id = req.params.id
    const departement = await Departement.update(req.body, { where: { id: id } })
    res.status(200).send(departement)
}

// delete departement 

const deleteDepartement = async (req, res) => {
    let id = req.params.id
    await Departement.destroy({ where: { id: id } })
    res.status(200).send('departement has been deleted !!!')
}


module.exports = {
    getALLDepartement,
    addDepartement,
    getOneDepartement,
    updateDepartement,
    deleteDepartement
}