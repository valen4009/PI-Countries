const axios = require('axios');
const sequelize = require('sequelize');
const { Activity } = require('../db');

const postActivity = async ({ id, name, difficult, duration, season, countryId }) => {
    const newActivity = await Activity.create({ id, name, difficult, duration, season });
    await newActivity.addCountry(countryId);
    return newActivity;
}

module.exports = postActivity;