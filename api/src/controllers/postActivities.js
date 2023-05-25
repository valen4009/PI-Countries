const { Activity, Country } = require('../db');

const postActivity = async (req, res) => {
    try {
        const { name, difficult, duration, season, countries } = req.body;
        const newActivity = await Activity.create({ 
            name, 
            difficult, 
            duration, 
            season, 
        });
        const country = await Country.findAll({
            where: {name: countries}
        })
        await newActivity.addCountry(country);
        res.status(200).json(newActivity);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = postActivity;