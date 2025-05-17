//# IMPORT --------------------------------

//IMPORT EXPRESS
const express = require("express");
const app = express();
//PORTA
const port = 3000;

//IMPORT ROUTER POSTS
const routerPosts = require("./routers/posts");

//IMPORT MIDDLEWARE ERROR
const errorHandler = require("./middleware/errorhandler.js");

//IMPORT MIDDLEWARE NOT FOUND
const notFound = require("./middlewares/notFound.js");

//----------------------------------------------------------

//# SET PUBLIC DIRECTORY --------------------------------
app.use(express.static(`public`));

//# SET BODY-PARSER --------------------------------
app.use(express.json());

//# SET RUTER POSTS --------------------------------
app.use("/posts", routerPosts);

//# MIDDLEWARE ERROR
app.use(errorHandler);

//# MIDDLEWARE NOT FOUND
app.use(notFound);

//----------------------------------------------------------

//# LISTEN PORT ---------------------------------
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Lettura della porta: ${port}`);
  }
});
