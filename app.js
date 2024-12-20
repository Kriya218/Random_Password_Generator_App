const express = require('express');
const {engine} = require('express-handlebars');
const app = express();
const port = 3000;
const passwordGenerator = require('./password_generator');

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const conditions = req.body;
  const password = passwordGenerator(conditions);  
  res.render('index', {password, conditions} )
})

app.listen(port, () => {
  console.log(`Express server running on: http://localhost:${port}/`)
})