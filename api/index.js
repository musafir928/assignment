const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

const { saveRandom, guess } = require('./utilities.js')


app.get('/',(req,res)=>saveRandom(req,res));
app.get('/restart',(req,res)=>saveRandom(req,res));
app.post('/guess',(req,res)=>guess(req,res));



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;