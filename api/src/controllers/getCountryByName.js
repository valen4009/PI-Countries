const { Country } = require('../db');
const { Op } = require('sequelize');

const getCountryByName = async (name) => {
    const countries = await Country.findAll({
        where: {
          name: { [Op.iLike]: `%${name}%` }
        },
    });
    return countries;
}

module.exports = {
    getCountryByName
}