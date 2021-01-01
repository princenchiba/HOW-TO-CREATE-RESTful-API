const express = require('express');
const app = express();

app.get('/users', function(req, res) {
  // Return a list of all users
});

app.post('/users', function(req, res) {
  // Create a new user
});

app.get('/users/:id', function(req, res) {
  // Return a specific user
});

app.put('/users/:id', function(req, res) {
  // Update a specific user
});

app.delete('/users/:id', function(req, res) {
  // Delete a specific user
});
