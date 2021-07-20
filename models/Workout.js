const mongoose = require('mongoose');
const {Schema} = mongoose;

const workoutSchema = new Schema({
    day: {type: Date, default: () => new Date()}, 
    exercises: [{
        type: {type: String, required:'Must choose type'},
        name: {type: String, required: 'Must choose name'},
        duration: {type: Number, required: 'Must choose duration'},
        weight: {type: Number},
        reps: {type: Number},
        sets: {type: Number},
        distance: {type: Number}
    }]
})

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout; 