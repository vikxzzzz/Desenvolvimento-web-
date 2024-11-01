const url = "https://botafogo-atletas.mange.li/2024-1/"

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

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


pega_json(`${url}masculino`).then(
    (r) => {
        r.forEach(
            (ele) => container.appendChild(montaCard(ele))

        )
    }
);



/*dados.forEach(
    (ele) => container.appendChild(montaCard(ele))
)*/

/*container.innerHTML += `
        <article>
            <h1>${atleta.nome}</h1>
            <img src='${atleta.imagem}'>
            <p>${atleta.detalhes}</p> 
        </article>    
        `*/