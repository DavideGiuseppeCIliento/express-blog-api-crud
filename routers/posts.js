//IMPORT EXPRESS
const express = require("express");

//IMPORT DATA
let posts = require("../data/array-blog");

//IMPORT CONTROLLER FUNCTION
const postController = require("../controllers/postController.js");

//SET ROUTER
const router = express.Router();

// CRUD
//# INDEX --------------------------------
router.get("/", postController.index);

//# SHOW --------------------------------
router.get("/:id", postController.show);

//# STORE --------------------------------
router.post("/", postController.store);

//# UPDATE --------------------------------
router.put("/:id", postController.update);

//# MODIFY --------------------------------
router.patch("/:id", postController.modify);

//# DESTROY --------------------------------
router.delete("/:id", postController.destroy);

//EXPORT ROUTER
module.exports = router;
