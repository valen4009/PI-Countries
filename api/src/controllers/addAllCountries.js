const axios = require('axios');
const sequelize = require('sequelize');
const { Country } = require('../db');
const { API_URL } = process.env;

const addCountry = async() => {
    try {
        const response = await axios(`${API_URL}`);
        const countries = response.data.map(country => {
            return{
                id: country.cca3,
                name: country.name.common,
                image: country.flags && country.flags.length > 0 ? country.flags[0] : null,
                region: country.region,
                capital: country.capital && country.capital.length > 0 ? country.capital[0] : null, 
                subregion: country.subregion,
                area: country.area,
                population: country.population,
            }
        });
        await Country.bulkCreate(countries);
    }catch (error){
        console.log(error)
    }    
}

module.exports = addCountry;