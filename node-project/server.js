// REQUIREMENTS
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// MIDDLEWARE
// serve assets from the public folder...
// ... as if they were inside the / directory
app.use(express.static('public'));

// DATA (temporary until we know how to use databases)


// MIDDLEWARE
// serve assets from the public folder...
// ... as if they were inside the / directory
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

// ROUTES
app.get("/", function(req, res){
	res.send('Hello World');
});

let targetNum = 20;

app.get("/picknumber", function(req, res){
  console.log(req.query);
  let userNum = req.query.number;
  if(parseInt(userNum) === targetNum) {
    res.send('Nailed it!');
  }
  else if (parseInt(userNum) < targetNum) {
    res.send('Too Low');
  }
  else if (parseInt(userNum) > targetNum) {
    res.send('Too high');
  }
});

app.post('/picknumber', function(req, res){
  targetNum = parseInt(request.body.number);
  response.status(200).send('Number updated successfully!');
});

let artworks = [];

app.get('/artworks', function(request, response){
  response.json(artworks);
});

app.post('/artworks', function(request, response){
  let newArtwork = {
    name: request.body.title,
    description: request.body.description,
    artist: request.body.artist
  };
  artworks.push(newArtwork);
  response.json(artworks);
});



// SERVER START
app.listen(3000, function () {
  console.log("HTTP server listening at localhost:3000");
});