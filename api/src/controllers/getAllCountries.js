const { Country } = require('../db');

const getAllCountries = async() => {
    const countries = await Country.findAll();
    return countries;
}

module.exports = getAllCountries