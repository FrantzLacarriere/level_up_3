// Load express
var express = require('express');
var logger=  require('./logger');
var app = express();

app.use(express.static('public'));
app.use(logger);

var courses = {
  Ruby: "Learn the best programming language evar!",
  iOS: "Make millions mingling with mobile", 
  JavaScript: "Just deal with it"
}

var normalizedNames = {
  ruby: "Ruby",
  ios: "iOS",
  javascript: "JavaScript"
}

app.get('/courses', function(req, res){
  res.json(Object.keys(courses));
});

app.get('/courses/:name', function(req, res){
  var name = req.params.name.toLowerCase();
  var nameNormalized = normalizedNames[name];
  res.json(courses[nameNormalized]);
});

// create an endpoint that returns a list of courses we teach here
// /courses
// ruby, iOS, javascript
// create an endpoint for each course
// /courses/ruby, /courses/rUBy

app.listen(3000, function(){
  console.log("Listening on port 3000");
})
