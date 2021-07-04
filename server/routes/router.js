const express = require('express');
const route = express.Router();
const services = require('../services/render');

//getting response from index.ejs page which we render in render.js file and import here
route.get('/', services.homeRoutes);

//route to add user page
route.get('/add-user', services.add_user);

//route to update user page
route.get('/update-user', services.update_user);





module.exports = route;
