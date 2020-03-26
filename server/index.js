var express = require('express');
var app = express();
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var Property = require('./models/property');

mongoose.connect("mongodb://localhost/property");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/addProperty', (req, res) => {
    Property.create(req.body, (err, newEntry) => {
        if (err) {
            res.status(404).send({ response: false });
        } else {
            console.log(newEntry);
            res.status(200).send({
                body: true
            })
        }
    })
})

// listening route
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})