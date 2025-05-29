const archive = require("../../tmp/upload/0dc0e3d0bbeb73fa295d1341a74a4106-usuarios_1000.json")


exports.superUsersService = () => {
    
     return archive.filter(data => data.score >=900 && data.active == true)
}