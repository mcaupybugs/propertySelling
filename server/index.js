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


//create a property 
app.post('/addProperty', (req, res) => {
    Property.create(req.body, (err, newEntry) => {
        if (err) {
            res.status(404).send({ response: false });
        } else {
            res.status(200).send({
                body: true
            })
        }
    })
})

//get the list of all the properties

app.get('/propertyList', (req, res) => {
    console.log("running");
    Property.find({}, (err, data) => {
        if (err) {
            res.status(404).send();
        } else {
            res.status(200).send(data);
        }
    })
})

//get one property
app.get('/property/:id', (req, res) => {
    console.log("runninhg");
    console.log(req.params.id);
    Property.find({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(404).send();
        } else {
            res.status(200).send(data[0]);
        }
    })
})

//update a property

app.patch('/property/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    Property.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) {
            res.status(404).send();
        } else {
            res.status(200).send();
        }
    })
})

//delete a property

app.delete('/property/:id', (req, res) => {
    console.log(req, body);

})

// listening route
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})