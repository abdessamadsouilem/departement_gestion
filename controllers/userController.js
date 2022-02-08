const db = require("../models")

const User = db.users


// create departement 
const addUser = async (req, res) => {

    let data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        departement_id: req.body.departement_id,
        password: req.body.password,
    }

    const user = await User.create(data)
    res.status(200).send(user)
}

// get all departements

const getALLUser = async (req, res) => {
    const user = await User.findAll()
    res.status(200).send(user)
}
// get single departement 

const getOneUser = async (req, res) => {
    let id = req.params.id
    const user = await User.findOne({ where: { id: id } })
    res.status(200).send(user)
}

// update departement 

const updateUser = async (req, res) => {
    let id = req.params.id
    const user = await User.update(req.body, { where: { id: id } })
    res.status(200).send(user)
}

// delete departement 

const deleteUser = async (req, res) => {
    let id = req.params.id
    await User.destroy({ where: { id: id } })
    res.status(200).send('User has been deleted !!!')
}


module.exports = {
    getALLUser,
    addUser,
    getOneUser,
    updateUser,
    deleteUser
}