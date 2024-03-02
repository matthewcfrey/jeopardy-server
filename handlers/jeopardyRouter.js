const JeopardyController = require('./jeopardyController');

// handle GET requests for [domain]/api/books - return all books
const handleAllAnswers = (app, JeopardyAnswer) => {
    app.get('/api/jeopardyanswers', (req,resp) => {
        JeopardyController.findAllAnswers(req, resp, JeopardyAnswer)
    });
}; 

// handle requests for specific book: e.g., /api/books/0321886518
const handleSingleCategory = (app, JeopardyAnswer) => {
    app.get("/api/jeopardyanswers/:category", (req, resp) => {
        JeopardyController.findSingleCategory(req, resp, JeopardyAnswer)
    });
}; 

const handleDistinctJCategory = (app, JeopardyAnswer) => {
    app.get("/api/jeopardycategories/", (req, resp) => {
        JeopardyController.findDistinctJCategory(req, resp, JeopardyAnswer)
    });
}; 

const handleDistinctDJCategory = (app, JeopardyAnswer) => {
    app.get("/api/doublejeopardycategories/", (req, resp) => {
        JeopardyController.findDistinctDJCategory(req, resp, JeopardyAnswer)
    });
}; 

const handleCreateAnswer = (app, JeopardyAnswer) => { 
    app.route('/api/create/answer') 
        .post( (req,resp) => { 
            JeopardyController.createAnswer(req, resp, JeopardyAnswer)
        }); 
}; 

module.exports = {
    handleAllAnswers,
    handleSingleCategory,
    handleCreateAnswer,
    handleDistinctJCategory,
    handleDistinctDJCategory
}; 