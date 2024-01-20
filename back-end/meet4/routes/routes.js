const express = require('express');
const { 
  postContact, 
  getAllContacts, 
  putContact, 
  deleteContact 
} = require('../controller/controller');
const Routes = express.Router();

Routes.post('/contacts', postContact);
Routes.get('/contacts', getAllContacts);
Routes.put('/contacts/:id', putContact);
Routes.delete('/contacts/:id', deleteContact);

module.exports = Routes;