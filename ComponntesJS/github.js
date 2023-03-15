function perquisaGit(){
    let nameUser = document.getElementById('perquisagit').value
    axios.get(`https://api.github.com/users/${nameUser}`)
    .then(res =>{
      if(res.data){
        let dados = res.data
        axios.get(dados.followers_url)
        .then(res =>{
          let followers_url = res.data
          console.log(followers_url)
          // for (var item of followers_url){
          //   return item
          // }
          // console.log(item)
          // followers_url.forEach(element => {
          //   console.log(element,'followers_url')
          // });

        var cards22 = document.getElementById("cards22")
        var div = document.createElement("div")
        div.setAttribute("class", "card22")
        div.setAttribute("id", "card22")
        cards22.appendChild(div);

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
        imgi.src = dados.avatar_url
        img.appendChild(imgi);

        var details = document.getElementById("content22")
        var div = document.createElement("div")
        div.setAttribute("class", "details")
        div.setAttribute("id", "details")
        details.appendChild(div);

        var name = document.getElementById("details")
        var div = document.createElement("div")
        var texto = document.createTextNode(`${dados.name}`)
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
        var texto = document.createTextNode("Biografia:")
        small.appendChild(texto);
        textp.appendChild(small);

        var textp = document.getElementById("bio")
        var p = document.createElement("p")
        var texto = document.createTextNode(`${dados.bio}`)
        p.appendChild(texto);
        textp.appendChild(p);

        var textp = document.getElementById("text-p")
        var div = document.createElement("div")
        div.setAttribute("class", "datas")
        div.setAttribute("id", "datas")
        textp.appendChild(div);

        var textp = document.getElementById("datas")
        var small = document.createElement("small")
        var texto = document.createTextNode("Membro desde:")
        small.appendChild(texto);
        textp.appendChild(small);

        var textp = document.getElementById("datas")
        var p = document.createElement("p")
        var texto = document.createTextNode(`${dados.created_at}`)
        p.appendChild(texto);
        textp.appendChild(p);

        var textp = document.getElementById("text-p")
        var div = document.createElement("div")
        div.setAttribute("class", "email")
        div.setAttribute("id", "email")
        textp.appendChild(div);

        var textp = document.getElementById("email")
        var small = document.createElement("small")
        var texto = document.createTextNode("Redes:")
        small.appendChild(texto);
        textp.appendChild(small);

        var textp = document.getElementById("email")
        var p = document.createElement("p")
        var texto = document.createTextNode(`${dados.blog}`)
        p.appendChild(texto);
        textp.appendChild(p);

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
        var h5 = document.createElement("h5")
        var texto = document.createTextNode("Seguidores(as)")
        h5.appendChild(texto);
        textp.appendChild(h5);

        var content44 = document.getElementById("content33")
        var div = document.createElement("div")
        div.setAttribute("class", "content44")
        div.setAttribute("id", "content44")
        content44.appendChild(div);

        var userseg = document.getElementById("content44")
        var div = document.createElement("div")
        div.setAttribute("class", "user-seg")
        div.setAttribute("id", "user-seg")
        userseg.appendChild(div);
        
        var a = document.getElementById("user-seg")
        var a = document.createElement("a")
        a.setAttribute("id", "aaaaaref")
        // a.href = dados.avatar_url
        a.appendChild(a);
        
        var img33 = document.getElementById("aaaaaref")
        var div = document.createElement("div")
        div.setAttribute("class", "img33")
        div.setAttribute("id", "img33")
        img33.appendChild(div);

        var img = document.getElementById("img33")
        var imgi = document.createElement("img")
        imgi.src = "https://avatars.githubusercontent.com/u/39320113?v=4"
        // imgi.src = dados.avatar_url
        img.appendChild(imgi);

        var details = document.getElementById("aaaaaref")
        var div = document.createElement("div")
        div.setAttribute("class", "details")
        div.setAttribute("id", "details")
        details.appendChild(div);

        var name22 = document.getElementById("details")
        var div = document.createElement("div")
        var texto = document.createTextNode("Berny")
        h5.appendChild(texto);
        div.setAttribute("class", "name22")
        div.setAttribute("id", "name22")
        name22.appendChild(div);

        
      })

      }
    })
}
let dados
  // var script = document.createElement('script');  
  // script.setAttribute('src','https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/js/swiffy-slider.min.js');
  // script.setAttribute('crossorigin','anonymous');
  // document.body.appendChild(script);
  
  // var link = document.createElement('link');  
  // link.setAttribute('href','https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/css/swiffy-slider.min.css');
  // link.setAttribute('crossorigin','anonymous');
  // link.setAttribute('rel','stylesheet');
  // document.body.appendChild(link);


        // if(item){
            // CRIA OS INPUTS
            
            // var card = document.getElementById("cards")
            // var div = document.createElement("div")
            // div.setAttribute("class", "card")
            // div.setAttribute("id", `card-${item.id}`)
            // card.appendChild(div);                
            // CountCard++;

            // var content = document.getElementById(`card-${item.id}`)
            // var div = document.createElement("div")
            // div.setAttribute("class", "content")
            // div.setAttribute("id", `content-${item.id}`)
            // content.appendChild(div);                
            // CountContent++;

            // var img = document.getElementById(`content-${item.id}`)
            // var imgi = document.createElement("img")
            // imgi.setAttribute("class", "img")
            // imgi.setAttribute("id", `img-${item.id}`)
            // imgi.src = item.photo
            // img.appendChild(imgi);                
            // CountIMG++;
            
            // var details = document.getElementById(`content-${item.id}`)
            // var div = document.createElement("div")
            // div.setAttribute("class", "details")
            // div.setAttribute("id", `details-${item.id}`)
            // details.appendChild(div);                
            // CountDetails++;
            
            // var name = document.getElementById(`details-${item.id}`)
            // var div = document.createElement("div")
            // div.setAttribute("class", "name")
            // var texto = document.createTextNode(`${item.name}`)
            // div.appendChild(texto);                
            // name.appendChild(div);                
            // CountName++;

            // var jobs = document.getElementById(`details-${item.id}`)
            // var div = document.createElement("div")
            // div.setAttribute("class", "jobs")
            // var texto = document.createTextNode(`${item.jobs}`)
            // div.appendChild(texto);
            // jobs.appendChild(div);                
            // CountJob++;


            // var Icons = document.getElementById(`content-${item.id}`)
            // var div = document.createElement("div")
            // div.setAttribute("class", "media-icons")
            // div.setAttribute("id", `media-icons-${item.id}`)
            // Icons.appendChild(div);                
            // CountIcons++;

            // // faceee
            // var a = document.getElementById(`media-icons-${item.id}`)
            // var aa = document.createElement("a")
            // aa.setAttribute("href", "#")
            // aa.setAttribute("id", `link-face-${item.id}`)
            // a.appendChild(aa);                
            // CountFace++;

            // var i = document.getElementById(`link-face-${item.id}`)
            // var ii = document.createElement("i")
            // ii.setAttribute("class", "fab fa-facebook-f")
            // i.appendChild(ii);                
            // CountIFace++;

            // // twitter
            // var a = document.getElementById(`media-icons-${item.id}`)
            // var aa = document.createElement("a")
            // aa.setAttribute("href", "#")
            // aa.setAttribute("id", `link-twitter-${item.id}`)
            // a.appendChild(aa);                
            // CountTwitter++;

            // var i = document.getElementById(`link-twitter-${item.id}`)
            // var ii = document.createElement("i")
            // ii.setAttribute("class", "fab fa-linkedin")
            // i.appendChild(ii);                
            // CountITwitter++;

            // // instagramm
            // var a = document.getElementById(`media-icons-${item.id}`)
            // var aa = document.createElement("a")
            // aa.setAttribute("href", "#")
            // aa.setAttribute("id", `link-insta-${item.id}`)
            // a.appendChild(aa);                
            // CountInstagram++;

            // var i = document.getElementById(`link-insta-${item.id}`)
            // var ii = document.createElement("i")
            // ii.setAttribute("class", "fab fa-instagram")
            // i.appendChild(ii);                
            // CountIInstagram++;

            // // youtube
            // var a = document.getElementById(`media-icons-${item.id}`)
            // var aa = document.createElement("a")
            // aa.setAttribute("href", "#")
            // aa.setAttribute("id", `link-youtube-${item.id}`)
            // a.appendChild(aa);                
            // CountTYou++;

            // var i = document.getElementById(`link-youtube-${item.id}`)
            // var ii = document.createElement("i")
            // ii.setAttribute("class", "fab fa-youtube")
            // i.appendChild(ii);                
            // CountIYoutube++;
        // }
  
    // var teste = document.getElementById("teste")
    // var div = document.createElement('div');
    // div.innerHTML = `

      
    // `;
    // // set style
    // // div.style.color = 'red';
    // teste.appendChild(div);



