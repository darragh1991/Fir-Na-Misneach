const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors')
const http = require('http');
// const usersRoutes = require('./routes/users.routes');
const userRoutes = require('./routes/users.routes');
const faqRoutes = require('./routes/faqs.routes');
// const contentRoutes = require('./routes/content.routes');

const app = express();
const port = process.env.PORT || '3000';
app.set('port', port);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ limit: '5mb', extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/users', userRoutes);
app.use('/faqs', faqRoutes);
// app.use('/statuses', statusesRoutes);
// app.use('/content', contentRoutes);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`App listening to ${port} ...`);
});

module.exports = app;


