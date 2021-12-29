const express = require("express");
const app = express();

const { sequelize, Soldiers, Squads, Loadouts, Missions, MissionThreads } = require('./models');

const path = require("path");
const BP = require("body-parser");

const Joi = require('joi');
const { mainModule } = require("process");

async function main(){
    await sequelize.authenticate();
    let usr;
    let msg;

    usr = await Soldier.create({ name: 'Brother-Captain Thybalt', tag:'86-100-6', role:'HQ', SquadID:'1', LoadoutID:'1', status: 'Missing', password:'1800ontheblock' });
    console.log(JSON.stringify(usr));

    usr = await Soldier.findOne({where:{soldierID: 1}});
    console.log(JSON.stringify(usr));

    await sequelize.close();

}

main();

app.use(BP.urlencoded({extended:false}));

app.use("/api", BP.json());

app.use(express.static(path.join(__dirname, 'static')));

app.get("/", (req, res) => {
    console.log(req);
    res.send("Hello World");
});

app.get("/blog/:kategorija/:godina/:mesec", (req, res) => {
    console.log(req.query);
    res.send("<h1>Nas Blog</h1> " + req.query.kategorija);
});

app.listen(8080);