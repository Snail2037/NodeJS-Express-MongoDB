const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Every document will have the name as a required field and will be declared
// as a unique meaning that no two documents should have the same name field.
const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    // flag time stamps set to true
    timestamps: true
});
// Automatically creates and updates two timestamps into each document stored in application

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;