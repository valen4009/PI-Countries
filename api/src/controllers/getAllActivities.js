// const { Activity, Country } = require('../db');

// const getAllActivities = async() => {
//     const activities = await Activity.findAll(
//         // attributes: ['name'],
//         // include: Country
// );
//     return activities;
// }

// module.exports = getAllActivities;

const { Activity, Country } = require('../db');

const getAllActivities = async(req, res) => {
    try {
        const activities = await Activity.findAll();
        res.status(200).json(activities);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = getAllActivities;