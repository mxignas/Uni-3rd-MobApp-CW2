const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

// Get Lessons
router.get('/', async (req, res) => {
    const lessons = await loadLessonsCollection(); // loads collection
    res.send(await lessons.find({}).toArray()); // finds and converts to array
    console.log("GET request for lessons is succesfull ");
});

// Loading collection and connecting to a MongoDB
async function loadLessonsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://dbAdmin:admin123@mobileappcw2.ovizx.mongodb.net/<Coursework2>?retryWrites=true&w=majority', {
        useUnifiedTopology: true
    });

    // returns connected collection from db
    return client.db('Coursework2').collection('Lessons');
};



module.exports = router;