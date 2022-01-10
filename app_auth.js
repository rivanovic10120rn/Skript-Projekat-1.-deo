const express = require('express');
const { sequelize, Soldiers } = require('./models');
const { newSoldierValidation, loginSoldierValidation } = require("../joi-validation.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();

var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));


app.post('/register', (req, res) => {

    const validEntry = newSoldierValidation.validate(req.body);
  
    if(validEntry.error){
        res.status(422).json({ msg: validEntry.error.message })
    }else{
        const obj = {
            name: req.body.name,
            tag: req.body.tag,
            role: req.body.role,
            SquadID: req.body.SquadID,
            LoadoutID: req.body.LoadoutID,
            password: bcrypt.hashSync(req.body.password, 10),
            status: req.body.status
        };

        Soldiers.create(obj).then( rows => {
            const usr = {
                userID: rows.id,
                user: rows.tag
            };
            
            const token = jwt.sign(usr, process.env.ACCESS_TOKEN_SECRET);
            console.log(token);
            res.json({token: token});

        }).catch( err => res.status(500).json({msg: "ERROR: Registration failed. "}));
    }

});

app.post('/login', (req, res) => {

    const validEntry = loginSoldierValidation.validate(req.body);
  
    if(validEntry.error){
        res.status(422).json({ msg: validEntry.error.message })
    }else{
        Soldiers.findOne({where: { tag: req.body.tag }})
            .then( usr => {

                if(bcrypt.compareSync(req.body.password, usr.password)) {
                    const obj = {
                        userID: usr.id,
                        user: usr.tag
                    };

                    const token = jwt.sign(obj, process.env.ACCESS_TOKEN_SECRET);

                    res.json({token: token});
                }else{
                    res.status(400).json({msg: "Incorrect password"});
                }
            })
            .catch( err => res.status(500).json({msg: "Incorrect soldier identification - TAG"}));
    }
});

app.listen({ port: 9090 }, async () => {
    await sequelize.authenticate();
    console.log("Connection established - Authentication Service");
})