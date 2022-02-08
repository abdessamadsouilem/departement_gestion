module.exports = (sequelize, DataTypes) => {
    const Departement = sequelize.define("departement", {
        name: {
            type: DataTypes.STRING,
            allowNull: 0
        },
        category: {
            type: DataTypes.STRING,
            allowNull: 0
        },
        description: {
            type: DataTypes.TEXT
        }
    })


    return Departement
}