const db = require('../config/connnection_db')

const { Sequelize, DataTypes } = require("sequelize");
const { pool } = require('../config/connnection_db');

const sequelize = new Sequelize(
    db.DB,
    db.USER,
    db.PASSWORD, {
    host: db.HOST,
    dialect: db.dialect,
    operatorsAliases: false,


    pool: {
        max: db.pool.max,
        min: db.pool.min,
        acquire: db.pool.acquire,
        idle: db.pool.idle
    }
}
)

sequelize.authenticate()
    .then(() => {
        console.log("connected .....");
    })
    .catch(err => {
        console.log('error', err);
    })


const db_structure = {};
db_structure.Sequelize = Sequelize;
db_structure.sequelize = sequelize;

db_structure.users = require('./userModel.js')(sequelize, DataTypes);
db_structure.departements = require('./departementModel.js')(sequelize, DataTypes);
db_structure.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync done !');
    })


module.exports = db_structure;