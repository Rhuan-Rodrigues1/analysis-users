const fs = require('fs')
const { performance } = require('perf_hooks')

exports.uploadUsers = (req, res) => {
    const start = performance.now()
    if(!req.file) {
        res.status(400).json({ error: "Sem arquivo upado" });
    }

    try {
        console.log(req.file);
        fs.readFile(req.file.path, 'utf8', (err, fileDate) => {
            if(err) {
                console.log(err);
                return
            }
            data = JSON.parse(fileDate)
        })
    const end = performance.now()
        res.status(201).json({
      message: "Arquivo salvo com sucesso",
      timeEnlapse: (end - start),
      details: req.file,
    });   
    } catch (error) {
        console.log(error);
        
    }
}
