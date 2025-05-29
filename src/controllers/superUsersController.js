const { superUsersService } = require("../services/superUsersService")
const { performance } = require('perf_hooks')

exports.superUsersController = (req, res) => {
    const start = performance.now()
    const respost = superUsersService()
    const final = performance.now()
    res.status(200).send({
        enlapse: final - start,
        respost: respost
    })
}