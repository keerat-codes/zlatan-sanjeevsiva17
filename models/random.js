const mongoose = require('mongoose');

const randomSchema = new mongoose.Schema({
joke_id : { type:  Number, description: "Required Field", required: true },
joke_name : { type:  String, description: "Required Field", required: true },
lol : { type:  Object, description: "Required Field", required: true },
});

module.exports = mongoose.model('random', randomSchema);