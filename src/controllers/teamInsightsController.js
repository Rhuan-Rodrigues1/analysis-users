const { teamInsightsService } = require('../services/teamInsightsService')


exports.teamInsightsController = (req, res) => {
   const response = teamInsightsService()
    res.status(200).send(response)
}