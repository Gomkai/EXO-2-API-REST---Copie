

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');




const IndexRouter = require('./routes/index');
const mongodb = require('./db/mongo');

mongodb.initClientDbConnection();

const app = express();

app.use(cors({
  exposedHeaders: ['Authorization'],
  origin: '*'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/',IndexRouter);

app.use(function(req, res, next) {
  res.status(404).json({name:'API',version : '1.0', status:404, message:'not_found'});
});

module.exports = app;



// {
//   "name": "tom",
//   "firstname": "tom",
//   "email": "tom@tom.com",
//   "password": "123",
//   "_id": "675a16051db747763c1f0d35",
//   "createdAt": "2024-12-11T22:45:25.454Z",
//   "updatedAt": "2024-12-11T22:45:25.454Z",
//   "__v": 0
// }