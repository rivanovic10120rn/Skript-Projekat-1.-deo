const express = require("express");
const app = express();

const { sequelize } = require('./models');

const path = require("path");
const BP = require("body-parser");

const Joi = require('joi');

app.use(BP.urlencoded({extended:false}));

app.use("/api", BP.json());

app.use(express.static(path.join(__dirname, 'static')));

usr = await Soldier.findOne({where:{id: 1}});
console.log(JSON.stringify(usr));

app.get("/", (req, res) => {
    console.log(req);
    res.send("Hello World");
});

app.get("/blog/:kategorija/:godina/:mesec", (req, res) => {
    console.log(req.query);
    res.send("<h1>Nas Blog</h1> " + req.query.kategorija);
});

app.listen(8080);