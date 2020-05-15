var express = require('express');
var app = express();


app.use('/', require('./routes/index.js'));

const PORT = 3000 || process.env.PORT;

app.listen(PORT, async(req, res) => console.log(`Server started on port ${PORT}`));