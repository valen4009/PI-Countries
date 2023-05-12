const express = require('express');
const countriesRoutes = require('express').Router();
const getAllCountries = require('../controllers/getAllCountries.js');
const getCountriesById = require('../controllers/getCountryById.js');
const { getCountryByName } = require('../controllers/getCountryByName.js');


countriesRoutes.get("/", async(req, res) => {
    try {
        const response = await getAllCountries();
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
});

countriesRoutes.get("/name", async (req, res) => {
    try {
        const { name } = req.query;
        const countries = await getCountryByName(name);

        if(countries.length > 0) {
            res.status(200).json(countries);
        } else {
            res.status(404).json({ message: 'No countries with that name were found' });
        }

    } catch (error) {
        console.error(error);
      res.status(500).send('Failed to search for countries by name');
    }
});

countriesRoutes.get("/:id", async (req, res) => {
    try {
        const {id} = req.params
        const country = await getCountriesById(id);
        res.status(200).json(country);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});


module.exports = countriesRoutes;