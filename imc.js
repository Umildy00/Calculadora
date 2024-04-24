

function imc () {
    const nome = document.getElementByld('nome').value;
    const altura = +document.getElementByld('altura').value;
    const peso = +document.getElementByld('peso').value;
    const resultado = document.getElementByld('resultado');

    if (nome !== "&& altura !== " && peso !== ") {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = ";

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ieal. Parabéns!!!';
        }else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

    }else {
        resultado.textConten = 'Preencha todos os campos!!!';
    }
    
}