//# IMPORT --------------------------------

//IMPORT EXPRESS
const express = require("express");
const app = express();
//PORTA
const port = 3000;

//IMPORT DATA
// const posts = require("./data/array-blog");

//IMPORT ROUTER POSTS
const routerPosts = require("./routers/posts");
const errorHeandler = require("./middlewares/errorheadler");

//IMPORT MIDDLEWARE ERROR
const errorheadler = require("./middleware/errorHadler");

//IMPORT MIDDLEWARE NOT FOUND
const notFound = require("./middlewares/notFound");

//----------------------------------------------------------

//# SET PUBLIC DIRECTORY --------------------------------
app.use(express.static(`public`));

//# SET BODY-PARSER --------------------------------
app.use(express.json());

//# SET RUTER POSTS --------------------------------
app.use("/posts", routerPosts);

//# MIDDLEWARE ERROR
app.use(errorHeandler);

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
