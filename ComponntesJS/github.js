


function perquisaGit(){
    let nameUser = document.getElementById('perquisagit').value
    axios.get(`https://api.github.com/users/${nameUser}`)
    .then(res =>{
      if(res.data){
        let dados = res.data
          this.clearBox()
          this.montaComntent(dados)
          this.getAmigos(dados)
      }
    })
}
function clearBox() {
  var div = document.getElementById("cards22");
  while(div.firstChild) {
      div.removeChild(div.firstChild);
  }
}
function montaComntent(value){
          var cards22 = document.getElementById("cards22")
          var div = document.createElement("div")
          div.setAttribute("class", "card22")
          div.setAttribute("id", "card22")
          cards22.appendChild(div);
            
            // document.getElementById("card22").reset();
          var card22 = document.getElementById("card22")
          var div = document.createElement("div")
          div.setAttribute("class", "content22")
          div.setAttribute("id", "content22")
          card22.appendChild(div);
  
          var content22 = document.getElementById("content22")
          var div = document.createElement("div")
          div.setAttribute("class", "img22")
          div.setAttribute("id", "img22")
          content22.appendChild(div);
  
          var img = document.getElementById("img22")
          var imgi = document.createElement("img")
          imgi.src = value.avatar_url
          img.appendChild(imgi);
  
          var details = document.getElementById("content22")
          var div = document.createElement("div")
          div.setAttribute("class", "details")
          div.setAttribute("id", "details")
          details.appendChild(div);
  
          var name = document.getElementById("details")
          var div = document.createElement("div")
          var texto = document.createTextNode(`${value.name}`)
          div.appendChild(texto);
          div.setAttribute("class", "name22")
          div.setAttribute("id", "name22")
          name.appendChild(div);
  
          var card22 = document.getElementById("card22")
          var div = document.createElement("div")
          div.setAttribute("class", "content22")
          div.setAttribute("id", "content23")
          card22.appendChild(div);
  
          var textp = document.getElementById("content23")
          var div = document.createElement("div")
          div.setAttribute("class", "text-p")
          div.setAttribute("id", "text-p")
          textp.appendChild(div);
  
          var textp = document.getElementById("text-p")
          var div = document.createElement("div")
          div.setAttribute("class", "bio")
          div.setAttribute("id", "bio")
          textp.appendChild(div);
          
          var textp = document.getElementById("bio")
          var small = document.createElement("small")
          var texto = document.createTextNode("BIOGRAFIA:")
          small.setAttribute("class", "nameh5")
          small.appendChild(texto);
          textp.appendChild(small);
          
          var textp = document.getElementById("bio")
          var p = document.createElement("p")
          var texto = document.createTextNode(`${value.bio}`)
          p.appendChild(texto);
          textp.appendChild(p);
          
          var textp = document.getElementById("text-p")
          var div = document.createElement("div")
          div.setAttribute("class", "datas")
          div.setAttribute("id", "datas")
          textp.appendChild(div);
          
          var textp = document.getElementById("datas")
          var small = document.createElement("small")
          var texto = document.createTextNode("MEMBRO DESDE:")
          small.setAttribute("class", "nameh5")
          small.appendChild(texto);
          textp.appendChild(small);
          
          var textp = document.getElementById("datas")
          var p = document.createElement("p")
          moment.locale('pt');
          const data = moment(value.created_at).format('DD/MM/YYYY');
          console.log(data)
          var texto = document.createTextNode(data)
          p.appendChild(texto);
          textp.appendChild(p);
          
          var textp = document.getElementById("text-p")
          var div = document.createElement("div")
          div.setAttribute("class", "email")
          div.setAttribute("id", "email")
          textp.appendChild(div);
          
          var textp = document.getElementById("email")
          var small = document.createElement("small")
          var texto = document.createTextNode("REDES:")
          small.setAttribute("class", "nameh5")
          small.appendChild(texto);
          textp.appendChild(small);
  
          var textp = document.getElementById("email")
          var p = document.createElement("p")
          var texto = document.createTextNode(`${value.blog}`)
          p.appendChild(texto);
          textp.appendChild(p);
      
}

function getAmigos(amigues){
  axios.get(amigues.followers_url)
    .then(res =>{
      if(res.data){
        let amigos = res.data 
        this.montaAmigos(amigos)

      }
    })

}
function montaAmigos(amigos){
          
          var card22 = document.getElementById("card22")
          var div = document.createElement("div")
          div.setAttribute("class", "content22")
          div.setAttribute("id", "content24")
          card22.appendChild(div);
  
          var content33 = document.getElementById("content24")
          var div = document.createElement("div")
          div.setAttribute("class", "content33")
          div.setAttribute("id", "content33")
          content33.appendChild(div);
  
          var textp = document.getElementById("content33")
          var h5 = document.createElement("small")
          h5.setAttribute("class", "nameh5")
          var texto = document.createTextNode("MEUS SEGUIDORES")
          h5.appendChild(texto);
          textp.appendChild(h5);
  
          var content44 = document.getElementById("content33")
          var div = document.createElement("div")
          div.setAttribute("class", "content44")
          div.setAttribute("id", "content44")
          content44.appendChild(div);
  
          amigos.forEach(amigues => {
              
            var userseg = document.getElementById("content44")
            var div = document.createElement("div")
            div.setAttribute("class", "userseg")
            div.setAttribute("id", `userseg${amigues.id}`)
            userseg.appendChild(div);
            var hrefLink = document.getElementById(`userseg${amigues.id}`)
            var a = document.createElement("a")
            a.setAttribute("id", `hrefLink${amigues.id}`)
            a.setAttribute("class", "hrefLink")
            a.href = amigues.html_url
            hrefLink.appendChild(a);
            
            var img33 = document.getElementById(`hrefLink${amigues.id}`)
            var div = document.createElement("div")
            div.setAttribute("class", "img33")
            div.setAttribute("id", `img33${amigues.id}`)
            img33.appendChild(div);
    
            var img = document.getElementById(`img33${amigues.id}`)
            var imgi = document.createElement("img")
            imgi.src = amigues.avatar_url
            img.appendChild(imgi);
    
            var details = document.getElementById(`hrefLink${amigues.id}`)
            var div = document.createElement("div")
            div.setAttribute("class", "details")
            div.setAttribute("id", `details${amigues.id}`)
            details.appendChild(div);
    
            var name22 = document.getElementById(`details${amigues.id}`)
            var name = document.createElement("div")
            let Uppercase = amigues.login.replace(/([A-Z])/g, ' $1').trim()
            let nome = Uppercase.split(' ').slice(0, 1).join(' ')
            var texto = document.createTextNode(nome)
            name.appendChild(texto);
            name.setAttribute("class", "name22")
            name22.appendChild(name);
          });





  

          
  
  
  
          
}