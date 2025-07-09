// const router = require('express').Router();
// let Project = require('../models/project.model'); // We import the model we just created

// // This handles incoming HTTP GET requests on the /projects/ URL path
// router.route('/').get((req, res) => {
//     Project.find() // Mongoose method to get all projects from the database
//         .then(projects => res.json(projects)) // Return the projects in JSON format
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// module.exports = router;
const router = require('express').Router();
let Project = require('../models/project.model');

router.route('/').get((req, res) => {
    // --- STEP 2: ADD THIS CONSOLE LOG ---
    console.log("✅ Request has reached the /projects route handler!");
    
    Project.find()
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;