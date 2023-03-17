const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5000;


app.get('/', async (req,res) => {
    try {
        const response = await axios.get('http://svn.aps1aws.lumiq.int/issues.json?key=f10a774408fc14fc1cbbc5aa360988e3bae52f44', {headers: {'Access-Control-Allow-Origin': '*'}, mode: 'no-cors'});
        const data = response.data;
        res.send(data);
      } catch (error) {
        console.error(error);
        res.status(500).send(error)
      }
})

app.listen(PORT,() => {
    console.log("Connected to db and server is listening on port " + PORT)
})