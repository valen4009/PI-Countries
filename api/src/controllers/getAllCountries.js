// const { Country } = require('../db');

// const getAllCountries = async() => {
//     const countries = await Country.findAll();
//     return countries;
// }

// module.exports = getAllCountries


const { Country } = require('../db');

const getAllCountries = async(req, res) => {
    try {
        const countries = await Country.findAll();
        res.status(200).json(countries);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = getAllCountries