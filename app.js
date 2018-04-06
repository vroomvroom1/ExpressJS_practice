let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();

// let logger = function(req, res, next){
//   console.log('Logging...');
//   next();
// };
//
// app.use(logger);

//Body Parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000, function(){
  console.log('Server started');
})
