const express = require('express');
const app = express();

let config = require("config");

let mongo_port = config.get("MONGO_PATH");
let mongo_host = config.get("MONGO_HOST");

let mongoose = require('mongoose');
mongoose.connect(`mongodb://${mongo_host}:${mongo_port}/my_db`,{ useNewUrlParser: true });

const BodyParser = require('body-parser');


let port = process.env.PORT || config.get("PORT");
let host = process.env.HOST || config.get("HOST");

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.post('/', (req, res) => {
    res.status(200).send('Hello, world!')
});
app.use("/todos", require('./router').router);

app.listen(port, host, function (err) {

    if(!err)
        console.log(`your port and host is ${port}, ${host}`);
    else
        console.log(err);

});
