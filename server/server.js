// server.js
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const userRoutes = require('./routes/users.routes');
const faqRoutes = require('./routes/faqs.routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ limit: '5mb', extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/users', userRoutes);
app.use('/faqs', faqRoutes);

module.exports = app;
