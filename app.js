// const Joi = require('joi');
// const express = require('express');
// const dotenv = require('dotenv').config({path: './.env.development'})
// const app = express();

// app.use(express.json());

// const courses = [
//     { id: 1, name: "course1" },
//     { id: 2, name: "course2" },
//     { id: 3, name: "course3" },
// ]

// app.get("/", (req, res) => {
//     res.send('jello world');
// });

// app.get("/api/courses", (req, res) => {
//     res.send([1, 2, 3])
// })

// app.get("/api/courses/:id", (req, res) => {
//     res.send( req.params.id )
// })

// // post request 

// app.post("/api/courses", (req, res) => {

//     const { error } = validateCourse(req.body);
//     if ( error ) return res.status(400).send(error.details[0].message);
    
//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     };

//     courses.push(course);
//     res.send(course);
// })





// // add a course

// app.put('/api/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if (!course) return res.status(404).send("The course with the given ID was not found");

//     const { error } = validateCourse(req.body);
//     if ( error ) return res.status(400).send(error.details[0].message);
    

//     course.name = req.body.name;
//     res.send(course);
// })


// // delete a course

// app.delete('api/courses/:id', (req, res) => {
    
//     // look up the course. if it doesn't exist return 404
//     const course = courses.find( c=> c.id === parseInt(req.params.id));
//     if ( !course ) return res.status(404).send("The course with the given ID was not found");

//     // delete
//     const index = courses.indexOf(course);
//     courses.splice(index, 1);

//     // return the same course - response to the client -
//     res.send(course); 
// })


// // retrieve a specific course
// app.get("/api/courses/:id", (req, res) => {
//     const course = courses.find( c => c.id === parseInt(req.params.id));
//     if ( !course ) return res.status(404).send('The course with the given ID was not found');
//     res.send(course);
// })


// function validateCourse ( course ) {
//     const schema = {
//         name: Joi.string().min(3).required()
//     };

//     return Joi.validate( course, schema );
// }


// const port = process.env.PORT || 3000;
// app.listen( port, () => {
//     console.log(`Listenting on port ${port}...`);
// } )
