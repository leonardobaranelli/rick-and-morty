const express = require('express');
const morgan = require('morgan');

const router = require('./routes/index');
const app = express();

app.use((req, res, next) => {
  const origin = req.headers.origin;

  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.json());
app.use(morgan('dev'));
app.use("/rickandmorty", router);

module.exports = app;
