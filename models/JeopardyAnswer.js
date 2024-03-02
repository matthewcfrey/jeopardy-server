const mongoose = require('mongoose');
// define a schema that maps to the structure of the data in MongoDB
const answerSchema = new mongoose.Schema({
    category: String,
    air_date: Date,
    question: String,
    value: String,
    answer: String,
    round: String,
    show_number: String
 });
 module.exports = mongoose.model('JeopardyAnswer', answerSchema, 'JeopardyAnswers'); 