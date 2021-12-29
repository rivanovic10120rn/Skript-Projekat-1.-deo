const express = require("express");

const { sequelize } = require('./models');
const { Soldiers} = require('./models');
const { Squads} = require('./models');
const { Loadouts} = require('./models');
const { Missions} = require('./models');
const { MissionThreads} = require('./models');

const path = require("path");

const Joi = require('joi');

const app = express();

async function main(){
    await sequelize.authenticate();
    let usr;
    let msg;

    usr = await Soldiers.create({ name: 'Brother-Captain Thybalt', tag:'86-100-6', role:'HQ', SquadID:'1', LoadoutID:'1', status: 'Missing', password:'1800ontheblock' });
    console.log(JSON.stringify(usr));

    usr = await Soldiers.findOne({where:{id: 1}});
    console.log(JSON.stringify(usr));

    await sequelize.close();

}

main();

app.listen(8080);