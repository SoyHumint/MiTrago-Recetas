const express = require("express");
const routes = require("./routes/index");
const morgan = require("morgan");

const server = express();


server.use(morgan("dev"))

server.use('/', routes);

server.use((err, req, res, next) => {
   const status = 500;
   const message = err;
   console.error(err);
   res.status(status).send(message)
});

module.exports = server; 