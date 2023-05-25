const { Country, Activity } = require('../db');

const getAllCountries = async(req, res) => {
    try {
        const countries = await Country.findAll({
            include:[
                { 
                    model: Activity,
                    attributes: ["id", "name", "difficult", "duration", "season"],
                }
            ]
        });
        res.status(200).json(countries);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = getAllCountries