const sequelize = require("./db");
const { DataTypes, Model } = require("sequelize");

class Electronics extends Model {}

Electronics.init(
    {
        image: DataTypes.STRING,
        price: DataTypes.STRING,
        description: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: "electronics",
        timestamps: false,
    }
);

module.exports = Electronics;