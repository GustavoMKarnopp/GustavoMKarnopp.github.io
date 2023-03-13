
// const BASE_URL = 'https://api-comentarios.herokuapp.com/comentarios';

// fetch(BASE_URL)
// .then((resp) => resp.json())
// .then(function(data) {
//   console.log(data)
//     localStorage.setItem('data', JSON.stringify(data));
// })
// .catch(function(error) {
//   console.log(error);
// });
const express = require("express");
const axios = require("axios");

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

const comentariosEndpoint = 'https://api-comentarios.herokuapp.com/comentarios';


  try {
    await axios.get(comentariosEndpoint)
    .then((resp) => resp.json())
    .then(function(data) {
      console.log(data)
        localStorage.setItem('data', JSON.stringify(data));
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({error: "Erro ao obter os comentários"});
  };

app.post("/comentarios", async (req, res) => {
  const { 
    id,
    name,
    jobs,
    photo,
    description,
    email,
    facebook,
    linkedin,
    instagram,
    github
   } = req.body;
  try {
    const response = await axios.post(comentariosEndpoint, { 
      id,
      name,
      jobs,
      photo,
      description,
      email,
      facebook,
      linkedin,
      instagram,
      github
     });
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({error: "Erro ao enviar o comentário"});
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});