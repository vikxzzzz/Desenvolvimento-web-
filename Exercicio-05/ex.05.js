console.log (2+2);
console.log ("1" + 2);

let resultado;

const preco = 30;

/* (preco < 40){
  resultado = "O livro e barato";
} else {
  resultado = "O livro não é barato"
}*/

/*reco = 50, não irá funcionar porque o preço está atribuido como uma constante */

resultado = preco < 40 ?"O livro é barato" : "O livro não é barato";


const meuArray = [1,2,3]


const meuObjeto = {
  texto: "Uma propriedade",
  numero: 34
}

let minha_var = "endereco"

function soma (a, b){
  return a + b;
}


const anonimo = function (a, b){
  return a + b;
}

const arrow = (a, b) => {
  return a + b;
}

const arrow2 = (a, b) => a + b;

const arrow3 = a => a + 2;

const dobro = elemento => {console.log(elemento * 2)}