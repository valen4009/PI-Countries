const { Country, Activity } = require('../db');

const getCountriesById = async (id) => {
    const country = await Country.findByPk(id, {
        include:[
            { 
                model: Activity,
                attributes: ["name", "difficult", "duration", "season"],
            }
        ]
    });
    return country
};

module.exports = getCountriesById