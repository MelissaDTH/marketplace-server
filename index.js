// Initial
const port = process.env.PORT || 4000;
const express = require("express");
const app = express();
require("./seeds");

// Middlewares
const bodyParser = require("body-parser");
const bodyParserMiddleWare = bodyParser.json();

const cors = require("cors");
const corsMiddleWare = cors();

// Models & routing
const authenticationRouter = require("./authentication/router");
const categoriesRouter = require("./categories/router");
const usersRouter = require('./users/router');
const productRouter = require('./products/router');
const commentRouter = require('./comments/router');

app
  .use(corsMiddleWare)
  .use(bodyParserMiddleWare)
  .use(authenticationRouter)
  .use(categoriesRouter)
  .use(usersRouter)
  .use(productRouter)
  .use(commentRouter)

app
  .listen(port, () => console.log(`The app is listening on ${port}.`));
