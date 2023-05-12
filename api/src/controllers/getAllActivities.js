const { Activity, Country } = require('../db');

const getAllActivities = async() => {
    const activities = await Activity.findAll(
        // attributes: ['name'],
        // include: Country
);
    return activities;
}

module.exports = getAllActivities;