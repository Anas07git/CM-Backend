const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes.root');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/', routes);

// Error handling middleware
app.use((err, req, res, next) => {    
    if (err.isBoom) {
      const { output } = err;      
      res.status(output.statusCode).json({...output.payload, success:false});
    } else {
      res.status(500).json({ success:false, statusCode: 500, error: 'Internal Server Error', message: err.message });
    }
  });

module.exports = app;