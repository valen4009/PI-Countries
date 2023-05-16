// const express = require('express');
const activitiesRoutes = require('express').Router();
const postActivity = require('../controllers/postActivities');
const getAllActivities = require('../controllers/getAllActivities');

// activitiesRoutes.post("/", async (req, res) => {
//     try {
//         const { name, difficult, duration, season, countryId } = req.body;
//         const newActivity = await postActivity({  
//             name, 
//             difficult, 
//             duration, 
//             season, 
//             countryId,
//         });
//         res.status(200).json(newActivity);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// })
activitiesRoutes.post("/", postActivity);

// activitiesRoutes.get("/", async(req, res) => {
//     try {
//         const response = await getAllActivities();
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });
activitiesRoutes.get("/", getAllActivities);

module.exports = activitiesRoutes;