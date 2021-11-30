const express = require("express");
const Men = require("./men");
const Women = require("./women");
const Jewellery = require("./jewellery");
const Electronics = require("./electronics");
const path = require("path");
const Handlebars = require("handlebars");
const expressHandlebars = require("express-handlebars");
const {
    allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
});
app.engine("handlebars", handlebars);
app.set("view engine", "handlebars");
app.set('views', path.join(__dirname, 'views'));

app.get("/shopping-cart", async (req, res) => {
    res.sendFile(path.join(__dirname, 'public/shopping-cart.html'));
});

app.get("/jewellery", async (req, res) => {
    const jewellery = await Jewellery.findAll();
    res.render("jewellery", { jewellery });
});

app.get("/electronics", async (req, res) => {
    const electronics = await Electronics.findAll();
    res.render("electronics", { electronics });
});

app.get("/men", async (req, res) => {
    const men = await Men.findAll();
    res.render("men", { men });
});

app.get("/women", async (req, res) => {
    const women = await Women.findAll();
    res.render("women", { women });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});