const express = require("express");

const { sequelize } = require('./models');
const { Soldiers} = require('./models');
const { Squads} = require('./models');
const { Loadouts} = require('./models');
const { Missions} = require('./models');
const { MissionThreads} = require('./models');

const squadRt = require('./routes/squadsRoute');
const soldierRt = require('./routes/soldiersRoute');
const loadoutRt = require('./routes/loadoutsRoute');
const missionRt = require('./routes/missionsRoute');
const missionthreadRt = require('./routes/missionthreadsRoute');

const path = require("path");

const Joi = require('joi');

const app = express();

app.use('/admin/squads', squadRt);
app.use('/admin/soldiers', soldierRt);
app.use('/admin/loadouts', loadoutRt);
app.use('/admin/missions', missionRt);
app.use('/admin/missionthreads', missionthreadRt);

// async function main(){
//     await sequelize.authenticate();
//     let usr;
//     let msg;

//     usr = await Soldiers.create({ name: 'Brother-Captain Thybalt', tag:'86-100-6', role:'HQ', SquadID:'1', LoadoutID:'1', status: 'Missing', password:'1800ontheblock' });
//     console.log(JSON.stringify(usr));

//     usr = await Soldiers.findOne({where:{id: 1}});
//     console.log(JSON.stringify(usr));

//     usr = await Soldiers.findAll();
//     console.log(JSON.stringify(usr));

//     usr = await Loadouts.findAll();
//     console.log(JSON.stringify(usr));

//     usr = await Squads.findAll();
//     console.log(JSON.stringify(usr));

//     msg = await Soldiers.findAll({include: ['equippedWith']})
//     console.log(msg[0].tag);

//     console.log(msg[0].equippedWith.meleeWeapon);

//     await sequelize.close();

// }

// main();

app.use(express.static(path.join(__dirname,'static')));

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

app.listen({ port: 8080 }, async () => {
    await sequelize.authenticate();
});
