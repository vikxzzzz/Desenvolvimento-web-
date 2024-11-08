const params = new URLSearchParams(window.location.search)
const id =params.get("id");

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

const montaPagina = (dados) => {
    const body = document.body;
    body.innerHTML= ''

    const nome = document.createElement("h1");
    nome.innerHTML = dados.nome;
    body.appendChild(nome); 

    const imagem = document.createElement("img"); 
    imagem.src = dados.imagem;
    body.appendChild(imagem);
}

pega_json(`https://botafogo-atletas.mange.li/2024-1/${id}`).then(
    ( r ) => montaPagina(r)
);


const achaCookie = (chave) => { 
    const lista = document.cookie.splt("; ")
    const par = lista.find(
        (e) => e.startsWith(`${chave}=`)
    )
    return par.split("=")[1];               
}

const dadosSessionStorage = sessionStorage.getItem('dados');
const obj = JSON.parse(dadosSessionStorage);

console.log('número de jogos:', obj.n_jogos);


if(sessionStorage.getItem("logado")){
    pega_json(`https://botafogo-atletas.mange.li/2024-1/${id}`).then(
        (r) => montaPagina(r)
    );
} else {
    document.body.innerHTML = "<h1>Voce precisa estar logado</h1>"
    
} 