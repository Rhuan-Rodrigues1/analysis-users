const { topCountriesService } = require('../services/topCountriesService')


exports.topCountriesController = (req, res) => {
    res.status(200).send(topCountriesService())
}