const express = require("express");

const { sequelize } = require('./models');
const { Soldiers} = require('./models');
const { Squads} = require('./models');
const { Loadouts} = require('./models');
const { Missions} = require('./models');
const { MissionThreads} = require('./models');

const path = require("path");

const Joi = require('joi');
const soldiers = require("./models/soldiers");

const app = express();

async function main(){
    await sequelize.authenticate();
    let usr;
    let msg;

    // usr = await Soldiers.create({ name: 'Brother-Captain Thybalt', tag:'86-100-6', role:'HQ', SquadID:'1', LoadoutID:'1', status: 'Missing', password:'1800ontheblock' });
    // console.log(JSON.stringify(usr));

    // usr = await Soldiers.findOne({where:{id: 1}});
    // console.log(JSON.stringify(usr));

    // usr = await Soldiers.findAll();
    // console.log(JSON.stringify(usr));

    // usr = await Loadouts.findAll();
    // console.log(JSON.stringify(usr));

    // usr = await Squads.findAll();
    // console.log(JSON.stringify(usr));

    msg = await Soldiers.findAll({include: ['equippedWith']})
    console.log(msg[0].tag);

    console.log(msg[0].equippedWith.meleeWeapon);

    await sequelize.close();

}

main();

app.listen(8080);