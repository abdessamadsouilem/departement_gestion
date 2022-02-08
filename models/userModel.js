module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("user", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: 0
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: 0
        },
        email: {
            type: DataTypes.STRING,
            allowNull: 0
        },
        number_phone: {
            type: DataTypes.STRING,

        },
        role: {
            type: DataTypes.STRING,
            allowNull: 0
        },
        departement_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'departements',
                key: 'id'
            },
            allowNull: 0
        },
        password: {
            type: DataTypes.STRING,
            allowNull: 0
        }

    })


    return user
}