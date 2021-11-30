const sequelize = require("./db");
const { DataTypes, Model } = require("sequelize");

class Men extends Model {}

Men.init(
    {
        image: DataTypes.STRING,
        price: DataTypes.STRING,
        description: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: "men",
        timestamps: false,
    }
);

module.exports = Men;