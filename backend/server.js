const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const app = express();
const routesFile = require('./routes/routesFile')
const PORT = process.env.PORT;
app.use(cors());

app.use("/api/", routesFile);



app.listen(PORT,() => {
    console.log("Connected to db and server is listening on port " + PORT)
})