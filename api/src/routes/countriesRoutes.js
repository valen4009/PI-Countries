// const express = require('express');
const countriesRoutes = require('express').Router();
const getAllCountries = require('../controllers/getAllCountries.js');
const getCountriesById = require('../controllers/getCountryById.js');
const getCountryByName = require('../controllers/getCountryByName.js');


countriesRoutes.get("/", getAllCountries);

countriesRoutes.get("/name", getCountryByName);

countriesRoutes.get("/:id", getCountriesById);


module.exports = countriesRoutes;