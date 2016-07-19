var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlOthers.homelist);
router.get('/location', ctrlOthers.locationInfo);
router.get('/location/review/new', ctrlOthers.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
