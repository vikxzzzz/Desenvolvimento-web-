    const container = document.getElementById("container");
    
    const montaCard = (atleta) => {
        const cartao = document.createElement("article"); 
        const nome = document.createElement("h1");
        const imagem = document.createElement("img");
        const descri = document.createElement("p"); 

        nome.innerHTML = atleta.nome;
        nome.style.fontFamily = "sans-serif"
        cartao.appendChild(nome); 

        imagem.src = atleta.imagem; 
        cartao.appendChild(imagem)

        descri.innerHTML = atleta.detalhes; 
        cartao.appendChild(descri); 

        return cartao
    }
        /*container.innerHTML += `
        <article>
            <h1>${atleta.nome}</h1>
            <img src='${atleta.imagem}'>
            <p>${atleta.detalhes}</p> 
        </article>    
        `*/


    dados.forEach(
        (ele) => container.appendChild(montaCard(ele))
    )


