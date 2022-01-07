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

app.use(express.static(path.join(__dirname,'static')));

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

app.listen({ port: 8080 }, async () => {
    await sequelize.authenticate();
    console.log('Connection established');
});
