let dados
window.onload = function () { 
    var CountCard = 1;
    var CountContent = 1;
    var CountIMG = 1;
    var CountDetails = 1;
    var CountName = 1;
    var CountJob = 1;
    var CountIcons = 1;
    var CountFace = 1;
    var CountIFace = 1;
    var CountTwitter = 1;
    var CountITwitter = 1;
    var CountInstagram = 1;
    var CountIInstagram = 1;
    var CountTYou = 1;
    var CountIYoutube = 1;

    if(localStorage.getItem('data')){            
        var data = localStorage.getItem('data');
        console.log(data)
        dados = JSON.parse(data)
    }
    for (var item of dados) {
        if(item){
            // CRIA OS INPUTS
            
            var card = document.getElementById("cards")
            var div = document.createElement("div")
            div.setAttribute("class", "card")
            div.setAttribute("id", `card-${item.id}`)
            card.appendChild(div);                
            CountCard++;

            var content = document.getElementById(`card-${item.id}`)
            var div = document.createElement("div")
            div.setAttribute("class", "content")
            div.setAttribute("id", `content-${item.id}`)
            content.appendChild(div);                
            CountContent++;

            var img = document.getElementById(`content-${item.id}`)
            var imgi = document.createElement("img")
            imgi.setAttribute("class", "img")
            imgi.setAttribute("id", `img-${item.id}`)
            imgi.src = item.photo
            img.appendChild(imgi);                
            CountIMG++;
            
            var details = document.getElementById(`content-${item.id}`)
            var div = document.createElement("div")
            div.setAttribute("class", "details")
            div.setAttribute("id", `details-${item.id}`)
            details.appendChild(div);                
            CountDetails++;
            
            var name = document.getElementById(`details-${item.id}`)
            var div = document.createElement("div")
            div.setAttribute("class", "name")
            var texto = document.createTextNode(`${item.name}`)
            div.appendChild(texto);                
            name.appendChild(div);                
            CountName++;

            var jobs = document.getElementById(`details-${item.id}`)
            var div = document.createElement("div")
            div.setAttribute("class", "jobs")
            var texto = document.createTextNode(`${item.jobs}`)
            div.appendChild(texto);
            jobs.appendChild(div);                
            CountJob++;


            var Icons = document.getElementById(`content-${item.id}`)
            var div = document.createElement("div")
            div.setAttribute("class", "media-icons")
            div.setAttribute("id", `media-icons-${item.id}`)
            Icons.appendChild(div);                
            CountIcons++;

            // faceee
            var a = document.getElementById(`media-icons-${item.id}`)
            var aa = document.createElement("a")
            aa.setAttribute("href", "#")
            aa.setAttribute("id", `link-face-${item.id}`)
            a.appendChild(aa);                
            CountFace++;

            var i = document.getElementById(`link-face-${item.id}`)
            var ii = document.createElement("i")
            ii.setAttribute("class", "fab fa-facebook-f")
            i.appendChild(ii);                
            CountIFace++;

            // twitter
            var a = document.getElementById(`media-icons-${item.id}`)
            var aa = document.createElement("a")
            aa.setAttribute("href", "#")
            aa.setAttribute("id", `link-twitter-${item.id}`)
            a.appendChild(aa);                
            CountTwitter++;

            var i = document.getElementById(`link-twitter-${item.id}`)
            var ii = document.createElement("i")
            ii.setAttribute("class", "fab fa-linkedin")
            i.appendChild(ii);                
            CountITwitter++;

            // instagramm
            var a = document.getElementById(`media-icons-${item.id}`)
            var aa = document.createElement("a")
            aa.setAttribute("href", "#")
            aa.setAttribute("id", `link-insta-${item.id}`)
            a.appendChild(aa);                
            CountInstagram++;

            var i = document.getElementById(`link-insta-${item.id}`)
            var ii = document.createElement("i")
            ii.setAttribute("class", "fab fa-instagram")
            i.appendChild(ii);                
            CountIInstagram++;

            // youtube
            var a = document.getElementById(`media-icons-${item.id}`)
            var aa = document.createElement("a")
            aa.setAttribute("href", "#")
            aa.setAttribute("id", `link-youtube-${item.id}`)
            a.appendChild(aa);                
            CountTYou++;

            var i = document.getElementById(`link-youtube-${item.id}`)
            var ii = document.createElement("i")
            ii.setAttribute("class", "fab fa-youtube")
            i.appendChild(ii);                
            CountIYoutube++;
        }
    }
} 



const BASE_URL = 'https://api-comentarios.herokuapp.com/comentarios';

function setMensagem(){
            let name = document.getElementById("exampleFormControlInput1").value;
            let jobs = document.getElementById("exampleFormControlInput6").value;
            let face = document.getElementById("exampleFormControlInput2").value;
            let linkedin = document.getElementById("exampleFormControlInput3").value;
            let insta = document.getElementById("exampleFormControlInput4").value;
            let github = document.getElementById("exampleFormControlInput5").value;
        
        const data = {
            id:           "",
            name:         name,
            jobs:         jobs,
            photo:        "",
            description:  "",
            facebook:     face,
            linkedin:     linkedin,
            instagram:    insta,
            github:       github
        };

    fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(data)
        })
        .then((resp) => resp.json())
        .then(function(data) {
            console.log(data);
        })
        .catch(function(error) {
            console.log(error);
        });
    }
