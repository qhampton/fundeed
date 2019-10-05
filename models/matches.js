module.exports = function (sequelize, DataTypes) {
    var Matches = sequelize.define("Matches", { 
        profile_id1:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        profile_id2:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        category_type: {
            type: DataTypes.ENUM,
            values: ['Technology', 'Outdoor Activites', 'Indoor Activited', 'Photography', 'Food', 'Nightlife', 'Music',]
        },

        match_score:DataTypes.INTEGER,
    });
    return Matches;
};