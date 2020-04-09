const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

const port = 4000;

app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect('mongodb://localhost:27017/dndSheet', {useNewUrlParser: true ,useUnifiedTopology: true});

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('stay a while and listen');
});

app.listen(port, (err) => {
  if(err) {
      throw new Error('Something bad happened ...');
  }
  console.log(`Server is listening on ${port}`);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', _ => {
  console.log('Database connected');
});
