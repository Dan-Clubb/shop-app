const sequelize = require("./db");
const { DataTypes, Model } = require("sequelize");

class Woman extends Model {}

Woman.init(
    {
        image: DataTypes.STRING,
        price: DataTypes.STRING,
        description: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: "woman",
        timestamps: false,
    }
);

module.exports = Woman;