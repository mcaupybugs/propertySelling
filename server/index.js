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
app.get('/propertyList', (req, res) => {
    console.log("running");
    Property.find({}, (err, data) => {
        if (err) {
            console.log(err);
            res.status(404).send();
        } else {
            console.log(data);
            res.status(200).send(data);
        }
    })
})

app.get('/property/:id', (req, res) => {
    console.log("runninhg");
    console.log(req.params.id);
    Property.find({ _id: req.params.id }, (err, data) => {
        if (err) {
            console.log(err);
            res.status(404).send();
        } else {
            var to_send = {
                property: data[0]
            }
            console.log(to_send);
            res.status(200).send(to_send);
        }
    })
})

// listening route
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})