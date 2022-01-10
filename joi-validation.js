const Joi = require("joi");

const newSquadValidation = Joi.object({
    name: Joi.string().trim().min(1).required(),
    type: Joi.string().valid('HQ','Battleline','Dreadnought').required(),
    status: Joi.string().valid('Available','onMission').required()
});

const updateSquadValidation = Joi.object({
    name: Joi.string().trim().min(1),
    type: Joi.string().valid('HQ','Battleline','Dreadnought'),
    status: Joi.string().valid('Available','onMission').required()
});

const newSoldierValidation = Joi.object({
    name: Joi.string().trim().min(1).required(),
    tag: Joi.string().pattern(/^[a-zA-Z]\d?-[a-zA-Z][a-zA-Z]\d\d-6$/).required(),
    role: Joi.string().valid('HQ','Sergeant','Special Gunner','Heavy Gunner','Trooper').required(),
    SquadID: Joi.number().integer().required(),
    LoadoutID: Joi.number().integer().required(),
    status: Joi.string().valid('Active','onMission','Missing','Deceased').required(),
    password: Joi.string().trim().alphanum().min(3).max(20).required(),
});

const updateSoldierValidation = Joi.object({
    name: Joi.string().trim().min(1),
    tag: Joi.string().pattern(/^[a-zA-Z]\d?-[a-zA-Z][a-zA-Z]\d\d-6$/),
    role: Joi.string().valid('HQ','Sergeant','Special Gunner','Heavy Gunner','Trooper'),
    SquadID: Joi.number().integer(),
    LoadoutID: Joi.number().integer(),
    status: Joi.string().valid('Active','onMission','Missing','Deceased').required(),
    password: Joi.string().trim().alphanum().min(3).max(20),
})

const newLoadoutValidation = Joi.object({
    type: Joi.string().valid('HQ','Sergeant','Special Gunner','Heavy Gunner','Trooper').required(),
    rangedWeapon: Joi.string().trim().min(1).required(),
    meleeWeapon: Joi.string().trim().min(1).required(),
    armourType: Joi.string().trim().min(1).required(),
    hasGrenades: Joi.boolean().truthy('yes').falsy('no').required()
});

const updateLoadoutValidation = Joi.object({
    type: Joi.string().valid('HQ','Sergeant','Special Gunner','Heavy Gunner','Trooper').required(),
    rangedWeapon: Joi.string().trim().min(1),
    meleeWeapon: Joi.string().trim().min(1),
    armourType: Joi.string().trim().min(1),
    hasGrenades: Joi.boolean().truthy('yes').falsy('no')
});

const newMissionValidation = Joi.object({
    description: Joi.string().trim().min(1).required(),
    location: Joi.string().trim().min(1).required(),
    SquadID: Joi.number().integer().required(),
    missionStatus: Joi.string().valid('Active','Pending','Successful','Failed').required(),
});

const updateMissionValidation = Joi.object({
    description: Joi.string().trim().min(1),
    location: Joi.string().trim().min(1),
    SquadID: Joi.number().integer(),
    missionStatus: Joi.string().valid('Active','Pending','Successful','Failed').required(),
});

const newMissionThreadMsgValidation = Joi.object({
    message: Joi.string().trim().min(1).required(),
    MissionID: Joi.number().integer().required(),
    SoldierID: Joi.number().integer().required(),
    recieved: Joi.boolean().truthy('yes').falsy('no')
});

const updateMissionThreadMsgValidation = Joi.object({
    message: Joi.string().trim().min(1),
    MissionID: Joi.number().integer(),
    SoldierID: Joi.number().integer(),
    recieved: Joi.boolean().truthy('yes').falsy('no').required()
});

const loginSoldierValidation = Joi.object({
    tag: Joi.string().pattern(/^[a-zA-Z]\d?-[a-zA-Z][a-zA-Z]\d\d-6$/).required(),
    password: Joi.string().trim().alphanum().min(3).max(20).required(),
});



module.exports = { 
    newSquadValidation, 
    updateSquadValidation, 
    newSoldierValidation, 
    updateSoldierValidation, 
    newLoadoutValidation,
    updateLoadoutValidation,
    newMissionValidation,
    updateMissionValidation,
    newMissionThreadMsgValidation,
    updateMissionThreadMsgValidation,
    loginSoldierValidation
};