const express = require('express');
const activitiesRoutes = require('express').Router();
const postActivity = require('../controllers/postActivities');
const getAllActivities = require('../controllers/getAllActivities');

activitiesRoutes.post("/", async (req, res) => {
    try {
        const { id, name, difficult, duration, season } = req.body;
        const newActivity = await postActivity({ 
            id, 
            name, 
            difficult, 
            duration, 
            season, 
        });
        res.status(200).json(newActivity);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

activitiesRoutes.get("/", async(req, res) => {
    try {
        const response = await getAllActivities();
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
});

module.exports = activitiesRoutes;