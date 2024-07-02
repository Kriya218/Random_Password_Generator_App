const express = require('express');
const {engine} = require('express-handlebars');
const app = express();
const port = 3000;
const generatePassword = require('./password_generator');

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const includeOptions = req.body;
  const password = generatePassword(includeOptions);
  console.log(includeOptions)
  res.render('index', {password: password} )
})

app.listen(port, () => {
  console.log(`Express server running on: http://localhost:${port}/`)
})