const express = require('express'), 
    bodyParser = require('body-parser'),
    app = express(),
    port = 3000,
    product = require('./modules/products.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/', product);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
