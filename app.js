const express = require('express');
const app = express();

let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/my_db',{ useNewUrlParser: true });

const BodyParser = require('body-parser');

let config = require("config");

let port = config.get("PORT");
let host = config.get("HOST");

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false })); // cai nay de lam j

app.use(require('./router').router);

app.listen(port, host, function (err) {

    if(!err)
        console.log(`your port and host is ${port}, ${host}`);
    else
        console.log(err);

});
