const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('Connected correctly to server');

    Dishes.create({
            name: 'Uthapizza',
            description: 'Test'
        })
        .then((dish) => {
            console.log(dish);

            // The exec will ensure that this is executed and that it will return a promise and so 
            // that promise will be returned so that it can then chain the method to the remaining ones
            return Dishes.findByIdAndUpdate(dish._id, {
                $set: { description: 'Updated test' }
            }, {
                new: true
            }).exec();
        })

    // finding the dishes
    .then((dish) => {
            console.log(dish);

            // Pushes a comment document into the dish and then save the changes there
            dish.comments.push({
                rating: 5,
                comment: 'I\'m getting a sinking feeling!',
                author: 'Leondaro di Caprio'
            });
            // comments is a field inside the dish

            return dish.save();

        })
        .then((dish) => {
            console.log(dish);

            return Dishes.remove({});
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        });

});