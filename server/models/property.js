var mongoose = require('mongoose');

var propertySchema = new mongoose.Schema({
    State: String,
    HouseNo: String,
    City: String,
    Price: Number,
    userId: String,
    image: String
});

var Property = mongoose.model("Property", propertySchema)

module.exports = Property;