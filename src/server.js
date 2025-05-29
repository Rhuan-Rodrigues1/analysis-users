const { app } = require('./app');
require('./utils/GlobalUtils')
const { config } = require('dotenv');

config

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("App running on: http://localhost:" + PORT);
})