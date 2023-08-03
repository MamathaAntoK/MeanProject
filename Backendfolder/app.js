const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 3000;

const authRoutes = require('./auth');

const morgan = require('morgan');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
const bcrypt = require('bcrypt');

const User = require('./user');
const employeedata = require('./user')


const jwt=require('jsonwebtoken')





 const mongoose = require('mongoose');



mongoose.connect('mongodb+srv://username:password@cluster0.qlazmk7.mongodb.net/Databasename?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });


app.use('/', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});























































































































