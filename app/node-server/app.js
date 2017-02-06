var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var todos = [
  {
    id : 1,
    title : 'Learn redux',
    isComplete : false
  }
];

var nextId = 2;
   var blogs = [
    {
      title: 'This is My First Project', 
      img: 'http://combiboilersleeds.com/images/react/react-0.jpg', 
      date: '2017-02-03', 
      data: [
        {
          dType: 'p', 
          data: 'First time trying. I have to admit it is kind of funny.'
        }
      ]
    }, 
    {
      title: 'How I Built This Site', 
      img: 'https://www.usb-antivirus.com/wp-content/uploads/2014/11/tutorial-windwos-10-2-320x202.png', 
      date: '2017-02-04', 
      data: [
        {
          dType: 'p', 
          data: 'Thanks to the open-source community, I can access a lot of knowledge to make this possible. Usually, I would do this in ta coffee shop in the middle of the city. This is particularly dificult because each time I stay, my wallet will become that much a little bit lighter. But this is the price you pay to make fron-end programming great again! Particularly, it gaves me a chance to meet other front-end developers in the coffee shop. I guess that will make up for the time you wasted in this kind of environment. I hope this paragraph is long enough to see the boundary of this CardItem... '
        }
      ]
    }
  ]

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.get('/api/blogs', function(req, res) {
  res.send(blogs);
});

app.get('/api/todos', function(req, res) {
  res.send(todos);
});

app.post('/api/todos', function(req, res) {
  todos.push({
    id : nextId++,
    title : req.body.todo.title,
    isComplete : false
  });
  res.json(todos);
});

app.param('id', function(req, res, next, id) {
  var filteredArray = todos.filter(function(todo) {
    return todo.id === parseInt(id);
  });
  if (filteredArray.length > 0) {
    req.todo = filteredArray[0];
    next();
  } else {
    res.json({err:'todo id not found.'});
  }
});

app.get('/api/todos/:id', function(req, res) {
  res.json(req.todo);
});

app.post('/api/todos/:id', function(req, res) {
  var todo = todos[todos.indexOf(req.todo)];
  todo.title = req.body.todo.title;
  todo.isComplete = req.body.todo.isComplete;
  res.json(todo);
});

app.delete('/api/todos/:id', function(req, res) {
  todos.splice(todos.indexOf(req.todo), 1);
  res.json(todos);
});

console.log('Server listening on http://0.0.0.0:3001');
app.listen(3001, '0.0.0.0');
