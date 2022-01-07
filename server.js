const express = require("express");
const cors = require("cors");

const app = express();

let corsOptions = {
    origin: 'http://localhost:5000'
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// testing api 
app.get('/', (req, res) => {
    res.json({ message: "hello world" })
})
// port 
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('hi im working')
})
