const { Country, Activity } = require('../db');
const { Op } = require('sequelize');

const getCountryByName = async (name) => {
    const countries = await Country.findAll({
        where: {
          name: { [Op.iLike]: `%${name}%` }
        },
        include: [ {
            model: Activity,
            attributes: ["name", "difficult", "duration", "season"],
        }]
    });
    // const filtered = countries.filter(country => {
    //     return country.name.common === name;
    // })
    return countries;
    // return filtered, countries;
}

module.exports = {
    getCountryByName
}