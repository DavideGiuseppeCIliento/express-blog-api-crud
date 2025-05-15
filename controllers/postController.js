//IMPORT DATA
let posts = require("../data/array-blog");

// # FUNZIONI CRUD ---------------------

//_____________________________________________
// INDEX ---------------------------------
//_____________________________________________

const index = (req, res) => {
  let queryTag = req.query.tag;
  //filtro è uguale all'array orginale
  let filteredPost = [...posts];

  // Se esiste un queryName
  if (queryTag) {
    filteredPost = posts.filter((post) => post.tags.includes(queryTag));
    return res.json({
      message: `Visualizzo post filtrati per ${queryTag}`,
      posts: filteredPost,
    });
  } else {
    res.json({
      message: "Visualizzo tutti i post",
      posts: filteredPost,
    });
  }
};

//_____________________________________________
// SHOW ---------------------------------
//_____________________________________________

const show = (req, res) => {
  // Trasformo in INT la stringa ID
  const id = parseInt(req.params.id);
  // Trova il post con ID corrispondente se non c'è error è FALSE
  const error = removePost.find((post) => removePost.id === id);

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

//_____________________________________________
// STORE ---------------------------------
//_____________________________________________

const store = (req, res) => {
  // Creaiamo l'id del nuovo elemento
  const newId = posts[posts.length - 1].id + 1;

  //importiamo i valori del body message
  const { name, image, ingredients } = req.body;

  //Controlli validità chiavi oggetto
  if (!name || typeof name !== "string") {
    res.status(400);
    res.json({
      error: "Error 400",
      message: "Compilazione errata!",
    });
    return;
  }

  if (!image || typeof image !== "string") {
    res.status(400);
    res.json({
      error: "Error 400",
      message: "Compilazione errata!",
    });
    return;
  }

  if (!ingredients || !Array.isArray(ingredients)) {
    res.status(400);
    res.json({
      error: "Error 400",
      message: "Compilazione errata!",
    });
    return;
  }

  //Creaiamo il nuovo elemento
  const newPost = {
    id: newId,
    name,
    image,
    ingredients,
  };

  //Aggiungiamo l'elemento all'Array
  posts.push(newPost);

  //Messaggio di successo e show dell'Array
  res.status(201);
  res.json({
    message: "Visualizzo tutti i post",
    posts,
  });
};

//_____________________________________________
// UPDATE ---------------------------------
//_____________________________________________

const update = (req, res) => {
  // Trasformo in INT la stringa ID
  const id = parseInt(req.params.id);
  // Trova il post con ID corrispondente se non c'è error è FALSE
  const error = removePost.find((post) => removePost.id === id);

  res.json({
    message: "Modifico un post",
  });
};

//_____________________________________________
// MODIFY ---------------------------------
//_____________________________________________

const modify = (req, res) => {
  // Trasformo in INT la stringa ID
  const id = parseInt(req.params.id);
  // Trova il post con ID corrispondente se non c'è error è FALSE
  const error = removePost.find((post) => removePost.id === id);

  res.json({
    message: "Modifico un post",
  });
};

//_____________________________________________
// DESTROY ---------------------------------
//_____________________________________________

const destroy = (req, res) => {
  // Trasformo in INT la stringa ID
  const id = parseInt(req.params.id);
  // Trova il post con ID corrispondente se non c'è error è FALSE
  const postFind = posts.find((post) => post.id === id);

  if (!postFind) {
    // ERROR FALSE error 404
    res.status(404).json({
      message: `Il post ${id} non è stato trovato`,
    });
  } else {
    //Stampa posts rimuovendo il prescelto
    posts = posts.filter((post) => post.id !== id);
    res.status(204).send();
    console.log(`Ho rimosso il post ${id}`);
  }
};

//EXPORT CONTROLLER FUNCTION
module.exports = { index, show, store, update, modify, destroy };
