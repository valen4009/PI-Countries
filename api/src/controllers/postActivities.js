// const axios = require('axios');
// const sequelize = require('sequelize');
// const { Activity } = require('../db');

// const postActivity = async ({ id, name, difficult, duration, season, countryId }) => {
//     const newActivity = await Activity.create({ id, name, difficult, duration, season });
//     await newActivity.addCountry(countryId);
//     return newActivity;
// }

// module.exports = postActivity;


const axios = require('axios');
const sequelize = require('sequelize');
const { Activity } = require('../db');

const postActivity = async (req, res) => {
    try {
        const { name, difficult, duration, season, countryId } = req.body;
        const newActivity = await Activity.create({ 
            name, 
            difficult, 
            duration, 
            season, 
            countryId, 
        });
        await newActivity.addCountry(countryId);
        res.status(200).json(newActivity);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = postActivity;