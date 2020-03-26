var express = require('express');
var app = express();
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');

mongoose.connect("mongodb://localhost/property");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/addProperty', (req, res) => {
    console.log(req.body)
    res.status(200).send({
        body: true
    })
})

// listening route
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})