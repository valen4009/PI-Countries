const axios = require('axios');
const sequelize = require('sequelize');
const { Activity } = require('../db');

const postActivity = async ({ id, name, difficult, duration, season }) => {
    const newActivity = await Activity.create({ id, name, difficult, duration, season });
    return newActivity;
}

module.exports = postActivity;