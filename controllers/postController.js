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

  // Importiamo i valori dal body
  const { title, content, image, tags } = req.body;

  // Controlli validità chiavi oggetto
  if (!title || typeof title !== "string") {
    res.status(400);
    res.json({
      error: "Error 400",
      message: "Compilazione errata!",
    });
    return;
  }

  if (!content || typeof content !== "string") {
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

  if (!tags || !Array.isArray(tags)) {
    res.status(400);
    res.json({
      error: "Error 400",
      message: "Compilazione errata!",
    });
    return;
  }

  // Creiamo il nuovo elemento
  const newPost = {
    id: newId,
    title,
    content,
    image,
    tags,
  };

  // Aggiungiamo l'elemento all'array
  posts.push(newPost);

  // Messaggio di successo e show dell'array
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
  const postFind = posts.find((post) => post.id === id);

  if (!postFind) {
    // ERROR FALSE error 404
    return res.status(404).json({
      message: `Il post ${id} non è stato trovato`,
    });
  }

  // Importiamo i valori dal body
  const { title, content, image, tags } = req.body;

  // Controlli validità chiavi oggetto
  if (!title || typeof title !== "string") {
    res.status(400);
    res.json({
      error: "Error 400",
      message: "Compilazione errata!",
    });
    return;
  }

  if (!content || typeof content !== "string") {
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

  if (!tags || !Array.isArray(tags)) {
    res.status(400);
    res.json({
      error: "Error 400",
      message: "Compilazione errata!",
    });
    return;
  }

  // Modifichiamo l'elemento nell'Array
  postFind.title = title;
  postFind.content = content;
  postFind.image = image;
  postFind.tags = tags;

  // Messaggio di successo e show dell'array
  res.status(200);
  res.json({
    message: "Visualizzo post modificato",
    post: postFind,
  });
};

//_____________________________________________
// MODIFY ---------------------------------
//_____________________________________________

const modify = (req, res) => {
  // Trasformo in INT la stringa ID
  const id = parseInt(req.params.id);
  // Trova il post con ID corrispondente se non c'è error è FALSE
  const postFind = posts.find((post) => post.id === id);

  if (!postFind) {
    // ERROR FALSE error 404
    return res.status(404).json({
      message: `Il post ${id} non è stato trovato`,
    });
  }

  // Importiamo i valori dal body
  let { title, content, image, tags } = req.body;

  // Controlliamo che i valori importati siano uguali o diversi dagli originali
  title = title ?? postFind.title;
  content = content ?? postFind.content;
  image = image ?? postFind.image;
  tags = tags ?? postFind.tags;

  // Controlli validità chiavi oggetto
  if (typeof title !== "string") {
    res.status(400);
    res.json({
      error: "Error 400",
      message: "Compilazione errata!",
    });
    return;
  }

  if (typeof content !== "string") {
    res.status(400);
    res.json({
      error: "Error 400",
      message: "Compilazione errata!",
    });
    return;
  }

  if (typeof image !== "string") {
    res.status(400);
    res.json({
      error: "Error 400",
      message: "Compilazione errata!",
    });
    return;
  }

  if (!Array.isArray(tags)) {
    res.status(400);
    res.json({
      error: "Error 400",
      message: "Compilazione errata!",
    });
    return;
  }

  // Modifichiamo l'elemento nell'Array
  postFind.title = title;
  postFind.content = content;
  postFind.image = image;
  postFind.tags = tags;

  // Messaggio di successo e show dell'array
  res.status(200);
  res.json({
    message: "Visualizzo post modificato",
    post: postFind,
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
