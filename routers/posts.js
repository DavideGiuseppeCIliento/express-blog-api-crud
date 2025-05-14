//IMPORT EXPRESS
const express = require("express");

//IMPORT DATA
let posts = require("../data/array-blog");

//SET ROUTER
const router = express.Router();

// CRUD
//# INDEX --------------------------------
router.get("/", (req, res) => {
  res.json({
    message: "Visualizzo tutti i post",
    posts,
  });
});

//# SHOW --------------------------------
router.get("/:id", (req, res) => {
  // Trasformo in INT la stringa ID
  const id = parseInt(req.params.id);
  // Trova il post con ID corrispondente
  const post = posts.find((post) => post.id === id);

  res.json({
    message: `Visualizzo il post ${id}`,
    post,
  });
});

//# STORE --------------------------------
router.post("/", (req, res) => {
  res.json({
    message: "Aggiungo un post",
  });
});

//# UPDATE --------------------------------
router.put("/:id", (req, res) => {
  res.json({
    message: "Modifico un post",
  });
});

//# MODIFY --------------------------------
router.patch("/:id", (req, res) => {
  res.json({
    message: "Modifico un post",
  });
});

//# DESTROY --------------------------------
router.delete("/:id", (req, res) => {
  // Trasformo in INT la stringa ID
  const id = parseInt(req.params.id);
  // Trova il post con ID corrispondente se non c'è error è FALSE
  const error = posts.find((post) => post.id === id);

  if (!error) {
    // ERROR FALSE error 404
    res.status(404).json({
      message: `Il post ${id} non è stato trovato`,
    });
  } else {
    //Stampa posts rimuovendo il prescelto
    posts = posts.filter((post) => post.id !== id);
    res.json({
      message: `Ho rimosso il post ${id}`,
      posts,
    });
  }
});

//EXPORT ROUTER
module.exports = router;
