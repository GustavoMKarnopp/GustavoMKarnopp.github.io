
const BASE_URL = 'https://api-comentarios.herokuapp.com/comentarios';

fetch(BASE_URL)
.then((resp) => resp.json())
.then(function(data) {
  console.log(data)
    localStorage.setItem('data', JSON.stringify(data));
})
.catch(function(error) {
  console.log(error);
});
