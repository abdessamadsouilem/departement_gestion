const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

app.use(cors())


app.use(bodyParser.json())



const router = require('./routes/departementRoutes')

app.use('/api/departement', router)

// testing api 
app.post('/', (req, res) => {

    res.json({ message: "hello world" })
})
// port 
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('hi im working')
})
