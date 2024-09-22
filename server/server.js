// budget API

const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

const budget = require('./budget.json');

app.get('/budget', (req, res) => {
    res.json(budget)
})

app.listen(port, ()=> {
    console.log("App served at :3000")
})
