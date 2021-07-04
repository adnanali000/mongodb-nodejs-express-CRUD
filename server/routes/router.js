const express = require('express');
const route = express.Router();
const services = require('../services/render');

const controller = require('../controller/controller');

//getting response from index.ejs page which we render in render.js file and import here
route.get('/', services.homeRoutes);

//route to add user page
route.get('/add-user', services.add_user);

//route to update user page 
route.get('/update-user', services.update_user);


//API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);





module.exports = route;
