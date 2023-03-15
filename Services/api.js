
const BASE_URL = 'https://api-comentarios.herokuapp.com/comentarios';

fetch(BASE_URL)
.then((resp) => resp.json())
.then(function(data) {
  // console.log(data)
    localStorage.setItem('data', JSON.stringify(data));
})
.catch(function(error) {
  console.log(error);
});  

// const BASE_GIT = 'https://api.github.com';
    
//     fetch(BASE_GIT)
//     .then((resp) => resp.json())
//     .then(function(data) {
//       console.log(data.user_url, 'data')
//       localStorage.setItem('gitHub', JSON.stringify(data));
//     })
//     .catch(function(error) {
//       console.log(error);
//     });

// function setMensagem(params){
//   const data = {
//     id:           params.id,
//     name:         params.name,
//     jobs:         params.jobs,
//     photo:        params.photo,
//     description:  params.description,
//     facebook:     params.facebook,
//     linkedin:     params.linkedin,
//     instagram:    params.instagram,
//     github:       params.github
//   };
  
//   fetch(BASE_URL, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(data)
//   })
//   .then((resp) => resp.json())
//   .then(function(data) {
//   console.log(data);
//   })
//   .catch(function(error) {
//   console.log(error);
//   });
// }
    
    // app.post("/comentarios", async (req, res) => {
      //   const { 
//     id,
//     name,
//     jobs,
//     photo,
//     description,
//     email,
//     facebook,
//     linkedin,
//     instagram,
//     github
//    } = req.body;
//   try {
  //     const response = await axios.post(comentariosEndpoint, { 
    //       id,
    //       name,
    //       jobs,
    //       photo,
    //       description,
    //       email,
    //       facebook,
    //       linkedin,
    //       instagram,
    //       github
    //      });
    //     return res.json(response.data);
    //   } catch (error) {
      //     console.error(error);
      //     return res.status(500).json({error: "Erro ao enviar o comentário"});
      //   }
      // });
