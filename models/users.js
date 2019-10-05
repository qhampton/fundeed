module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        gender: DataTypes.STRING,
        Zipcode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        search_radius: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        ziplist:DataType.ARRAY[int],
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },

        last_login: {
            type: Sequelize.DATE
        },
        status: {
            type: Sequelize.ENUM,
            values: ['active', 'inactive'],
            defaultValue: 'active'
        },
    });

    return User;
};