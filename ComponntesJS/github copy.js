let dados
window.onload = function () { 
    if(localStorage.getItem('data')){            
        var data = localStorage.getItem('data');
        dados = JSON.parse(data)
    }
    console.log(dados.length)
    console.log(dados)
    dados.forEach(element => {
            document.getElementById("names").innerHTML += `
            <input type="radio" name="testimonial" id="t-1">
            <input type="radio" name="testimonial" id="t-2">
            <input type="radio" name="testimonial" id="t-3" checked>
            <input type="radio" name="testimonial" id="t-4">
            <input type="radio" name="testimonial" id="t-5">
            <div class="testimonials">
            <label class="item" for="t-1">
                <div style="width: 100%;">
                    <p>
                    ${element.description}
                    </p>
                </div>
                <div class="contai-names-avatar">
                    <div class="names">
                    <h1> ${element.name} </h1>
                    <h5>${element.jobs}</h5>
                    <div class="div-imagem-car">
                        <img src="${element.photo}" alt="Avatar" class="avatar">
                    </div>
                    </div>
                    <div class="names-icons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                    </div>
                </div>
            </label>
            </div>
            <br/>
            <div class="dots">
                <label for="t-1"></label>
                <label for="t-2"></label>
                <label for="t-3"></label>
                <label for="t-4"></label>
                <label for="t-5"></label>
            </div>
            `;
            // document.getElementById("jobs").innerHTML = element.jobs;
            // document.getElementById("avatachon").innerHTML = element.photo;
            // document.getElementById("descriptio").innerHTML = element.description;
    });
    // return console.log(dados)
} 
