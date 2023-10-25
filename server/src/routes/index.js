const { Router } = require("express");
const getAllCountries = require('../controllers/countries/getAllCountries');
const getCountryByName = require('../controllers/countries/getCountryByName');
const getCountryById = require('../controllers/countries/getCountryById');
const getAllActivities = require('../controllers/activities/getAllActivities');
const newActivity = require('../controllers/activities/newActivity');
const deleteActivity = require('../controllers/activities/deleteActivity');

const router = Router();

// rutas para los países:
router.get('/countries', (req, res) => {
    const name = req.query.name;
    if(name) getCountryByName(req, res);
    else getAllCountries(req, res)
});
router.get('/countries/:id', getCountryById);

// rutas para las actividades:
router.get('/activities', getAllActivities);
router.get('/activities', getAllActivities);
router.post('/activities', newActivity);
router.delete('/activities/:id', deleteActivity);

module.exports = router;
