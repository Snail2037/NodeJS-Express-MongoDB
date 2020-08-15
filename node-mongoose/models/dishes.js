const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

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
    },
    comments: [commentSchema]
        // comment documents become sub-documents inside a dish document storing 
        // all the comments about the dish as an array of comment document
}, {
    // flag time stamps set to true
    timestamps: true
});
// Automatically creates and updates two timestamps into each document stored in application

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;