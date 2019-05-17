const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true})
  .then(
    () => { console.log('connection succeeded.') },
    err => { console.log('connection failed.') }
  );
