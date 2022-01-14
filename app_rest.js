
const express = require('express');
const { sequelize, Soldier } = require('./models');
const cors = require('cors');

const squadRt = require('./routes/squadsRoute');
const soldierRt = require('./routes/soldiersRoute');
const loadoutRt = require('./routes/loadoutsRoute');
const missionRt = require('./routes/missionsRoute');
const missionthreadRt = require('./routes/missionthreadsRoute');

const app = express();

var corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

app.use(express.json());

app.use(cors(corsOptions));

app.use('/admin', squadRt);
app.use('/admin', soldierRt);
app.use('/admin', loadoutRt);
app.use('/admin', missionRt);
app.use('/admin', missionthreadRt);



app.listen({ port: 8080 }, async () => {
    await sequelize.authenticate();
    console.log('Connection established - Rest API');
});