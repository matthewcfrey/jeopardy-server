require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())

//require our data model
const JeopardyAnswer = require('./models/JeopardyAnswer');

// tell node to use json and HTTP header features in body-parser
app.use(express.urlencoded({extended: true})); 

// use the route handlers
const jeopardyRouter = require('./handlers/jeopardyRouter.js');
jeopardyRouter.handleAllAnswers(app, JeopardyAnswer);
jeopardyRouter.handleSingleCategory(app, JeopardyAnswer);
jeopardyRouter.handleCreateAnswer(app, JeopardyAnswer);
jeopardyRouter.handleDistinctJCategory(app, JeopardyAnswer);
jeopardyRouter.handleDistinctDJCategory(app, JeopardyAnswer);

// create connection to database
require('./handlers/dataConnector.js').connect();


const port = process.env.PORT || 8080;
app.listen(port, () => {
 console.log("Server running at port= " + port);
}); 
