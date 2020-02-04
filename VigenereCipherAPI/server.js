const express = require('express');
const cors = require('cors');
const app = express();
const encoder = require('./app/encoder');
const decoder = require('./app/decoder');

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('It\'s working maaan');
});
app.use('/encode', encoder);
app.use('/decode', decoder);

const port = 8000;

app.listen(port, () => {
    console.log('Server running on port: ' + port);
});
