const multer = require('multer')
const path = require('path')
const crypto = require('crypto')



module.exports = {
     dest: path.resolve(__dirname, "..", "..", "tmp", "upload"),
        storage: multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, path.resolve(__dirname, "..", "..", "tmp", "upload"))
            },
            filename: (req, file, cb) => {
                crypto.randomBytes(16, (err, hash) => {
                    if (err) cb(err)
    
                    file.key = `${hash.toString('hex')}-${file.originalname}`
    
                    cb(null, file.key)
                })
            },
        })

}
