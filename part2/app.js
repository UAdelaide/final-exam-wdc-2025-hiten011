const express = require('express');
const path = require('path');
require('dotenv').config();

// BY ME

// importing ession
var cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

// creating session
app.use(cookieParser());
app.use(session({
    secret: 'hiten',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

// Routes
const walkRoutes = require('./routes/walkRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);

// Export the app instead of listening here
module.exports = app;