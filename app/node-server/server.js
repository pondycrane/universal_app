var express = require('express'); 
var app = express(); 
import mongoose from 'mongoose'; 
import serverConfig from './config';
import dummyData from './dummyData'; 
var bodyParser = require('body-parser'); 
import blogs from './routes/blog.routes';

mongoose.Promise = global.Promise; 
mongoose.connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }

  // feed some dummy data in DB.
  dummyData(); 
});

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.use('/api', blogs);

//app.get('/api/blogs', function( req, res ) {
//  res.send( blogs ); 
//})

app.get('/', function( req, res ) {
  res.send('Hello World')
})

app.listen( 3001, '0.0.0.0' ); 
