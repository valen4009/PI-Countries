const express = require('express')
const { Router } = require('express');
const countriesRoutes = require('./countriesRoutes.js')
const activitiesRoutes = require('./activitiesRoutes.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/countries', countriesRoutes);
router.use('/activities', activitiesRoutes);

module.exports = router;
