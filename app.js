const express = require('express');
const app = express();
let config = require("config");
const BodyParser = require('body-parser');


let port = process.env.PORT || config.get("PORT");
let host = process.env.HOST || config.get("HOST");

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));


app.use("/todos", require('./router'));
app.get('/', (req, res) => {
    res.status(200).send('Hello, world!')
});

app.listen(port, host, function (err) {

    if(!err)
        console.log(`your port and host is ${port}, ${host}`);
    else
        console.log(err);

});
