// const express = require('express');
const activitiesRoutes = require('express').Router();
const postActivity = require('../controllers/postActivities');
const getAllActivities = require('../controllers/getAllActivities');


activitiesRoutes.post("/", postActivity);

activitiesRoutes.get("/", getAllActivities);

module.exports = activitiesRoutes;