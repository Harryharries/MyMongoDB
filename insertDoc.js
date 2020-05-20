// js use mongoose to operate with mongoDB
const mongoose = require('mongoose');
// connect: return a promise
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connect success'))
    .catch(err => console.log(err, 'DB connect Fail'));

// create collection schema
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
});

// create collection by the schema
// param:
// 1.collect name
// 2.collect schema
const Course = mongoose.model('Course', courseSchema) // courses

// create document
const course = new Course({
    name: 'node.js',
    author: 'Harry',
    isPublished: true
});
// insert the document into DB
course.save();