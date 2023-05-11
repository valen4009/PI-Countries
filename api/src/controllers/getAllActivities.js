const { Activity } = require('../db');

const getAllActivities = async() => {
    const activities = await Activity.findAll();
    return activities;
}

module.exports = getAllActivities;