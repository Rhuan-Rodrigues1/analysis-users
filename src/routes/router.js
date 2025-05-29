const express = require('express')
const { uploadUsers } = require('../controllers/uploadController')
const { superUsersController } = require("../controllers/superUsersController")
const { topCountriesController } = require('../controllers/topCountriesController')
const { teamInsightsController } = require('../controllers/teamInsightsController')
const multer = require('multer')
const multerConfig = require('../utils/multerConfig')
const router = express.Router()


router.post('/users', multer(multerConfig).single("file"), uploadUsers)
router.get('/superusers', superUsersController)
router.get('/top-countries', topCountriesController)
router.get('/team-insights', teamInsightsController)

module.exports = router