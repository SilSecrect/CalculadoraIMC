function calcular(){
const nome = document.getElementById("nome").value;
var altura = document.getElementById("altura").value;
var peso = document.getElementById("peso").value;
const resposta = document.getElementById("resposta");
var alt = altura.replace(",", ".");
var pes = peso.replace(",", ".");
var resultado = (pes/Math.pow(alt,2)).toFixed(1);
// const valor = altura / peso

if ((altura == 0) || (peso == 0) || (nome == 0)) {
    resposta.innerHTML = "opa, observe os campos e digite novamente";
    
}else if((resposta <= 16) && (resultado < 16)) {
    resposta.innerHTML = `Seu IMC é: ${resultado} . ${nome}, você esta Abaixo do peso ( grau I )`;

}else if((resultado > 16) && (resultado <= 16 )){
    resposta.innerHTML = `Seu IMC é: ${resultado} . ${nome}, você esta Abaixo do peso ( grau II )`;

}else if((resultado == 17) && (resultado <= 18 )){
    resposta.innerHTML = `Seu IMC é: ${resultado} . ${nome}, você esta Abaixo do peso ( grau III )`;

}else if((resultado >= 18) && (resultado <= 24)){
    resposta.innerHTML = `Seu IMC é: ${resultado}. ${nome}, você está com o peso Adequado`;

}else if((resultado >= 25) && (resultado <= 29)){
    resposta.innerHTML = `Seu IMC é: ${resultado} . ${nome}, Você esta Sobrepeso`;

}else if((resultado >= 30) && (resultado <= 34)){
    resposta.innerHTML = `Seu IMC é: ${resultado} . ${nome}, você esta com Obesidade ( grau I) `;

}else if((resultado >= 35) && (resultado <= 39)){
    resposta.innerHTML = `Seu IMC é: ${resultado} . ${nome}, você esta com Obesidade ( grau II) `;

}else{
    resposta.innerHTML = `Seu IMC é: ${resultado} . ${nome}, você esta com problema! Consulte um Médico `;

}

}

function carregar(){
    location.reload();
}



// if ((altura == 0) || (peso == 0) || (nome == 0)) {
//     resposta.innerHTML = "opa, observe os campos e digite novamente";
// }else{
//     var alt = altura.replace(",", ".");
//     var pes = peso.replace(",", ".");
//     var resultado = (pes/Math.pow(alt,2)).toFixed(1);
    

// }
