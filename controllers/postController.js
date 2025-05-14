//IMPORT DATA
let posts = require("../data/array-blog");

// # FUNZIONI CRUD ---------------------

// INDEX

const index = (req, res) => {
  res.json({
    message: "Visualizzo tutti i post",
    posts,
  });
};

// SHOW
const show = (req, res) => {
  // Trasformo in INT la stringa ID
  const id = parseInt(req.params.id);
  // Trova il post con ID corrispondente
  const post = posts.find((post) => post.id === id);

  if (!error) {
    // ERROR FALSE error 404
    res.status(404).json({
      message: `Il post ${id} non è stato trovato`,
    });
  } else {
    //Stampa post scelto
    res.json({
      message: `Visualizzo il post ${id}`,
      post,
    });
  }
};

// STORE
const store = (req, res) => {
  res.json({
    message: "Aggiungo un post",
  });
};

// UPDATE
const update = (req, res) => {
  res.json({
    message: "Modifico un post",
  });
};

// MODIFY
const modify = (req, res) => {
  res.json({
    message: "Modifico un post",
  });
};

// DESTROY
const destroy = (req, res) => {
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
    res.status(204);
    console.log(`Ho rimosso il post ${id}`);
  }
};

//EXPORT CONTROLLER FUNCTION
module.exports = { index, show, store, update, modify, destroy };
