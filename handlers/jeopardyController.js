const findAllAnswers = (req, resp, JeopardyAnswer) =>{
    // use mongoose to retrieve all books from Mongo
    JeopardyAnswer.find()
    .then((data) => {
        resp.json(data);
    })
    .catch((err) => {
        resp.json({ message: "Unable to connect to JeopardyAnswers" });
    });
}

const findSingleCategory = (req, resp, JeopardyAnswer) => {
    const cat = req.params.category.toUpperCase()
        JeopardyAnswer.find({ category: cat })
        .then((data) => {
        resp.json(data);
        })
        .catch((err) => {
        resp.json({ message: "Unable to connect to jeopardyanswers" });
        });
}

const findDistinctJCategory = (req, resp, JeopardyAnswer) => {
    JeopardyAnswer.distinct("category", {round: "Jeopardy!"})
        .then((data) => {
        resp.json(data);
        })
        .catch((err) => {
        resp.json({ message: "Unable to connect to jeopardycategories" });
        });
}

const findDistinctDJCategory = (req, resp, JeopardyAnswer) => {
    JeopardyAnswer.distinct("category", {round: "Double Jeopardy!"})
        .then((data) => {
        resp.json(data);
        })
        .catch((err) => {
        resp.json({ message: "Unable to connect to jeopardycategories" });
        });
}

const createAnswer = (req, resp, JeopardyAnswer) => {
    // retrieve the form data from the http request 
    //console.log(req.body)
    const answer = {
        category: req.body.category.toUpperCase(),
        air_date: req.body.air_date,
        question: req.body.question,
        value: '$' + req.body.value,
        answer: req.body.answer,
        round: req.body.round,
        show_number: req.body.show_number
    };
    //now have mongoose add the answer data 
    JeopardyAnswer.create(answer)
    .then(result => {
        resp.send({msg: "answer created"})
    }) 
    .catch(err => {
        resp.send({msg: err.message})
    })
}

module.exports = {
    findAllAnswers,
    findSingleCategory,
    findDistinctJCategory,
    findDistinctDJCategory,
    createAnswer
}