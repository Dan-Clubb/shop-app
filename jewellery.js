const sequelize = require("./db");
const { DataTypes, Model } = require("sequelize");

class Jewellery extends Model {}

Jewellery.init(
    {
        image: DataTypes.STRING,
        price: DataTypes.STRING,
        description: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: "jewellery",
        timestamps: false,
    }
);

module.exports = Jewellery;