const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Bill = new Schema({
    Month: {
        type: String
    },
    Consumption: {
        type: String
    },
    Amount: {
        type: String
    },
   
});

module.exports = mongoose.model('Bill', Bill);