const botaoEnviar = document.querySelector('.botao');

botaoEnviar.addEventListener('click', (e) => {
    e.preventDefault();

    let nome = document.querySelector('#nome').value;
    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;

    if (altura !== '' && peso !== '') {
        peso = parseFloat(peso);
        altura = parseFloat(altura);

        if (nome !== '') {
            calculaIMC(altura, peso, nome);
        } else {
            calculaIMC(altura, peso);
        }
    }
 })

const calculaIMC = (altura, peso, nome = "Usuário") => {
    const imc = peso / (altura * altura);
    const categoria = verificaCategoria(imc);

    const resultado = `${nome}, seu IMC é de ${imc.toFixed(2)}. Você está com ${categoria}.`;

    escreveResultado(resultado);
}

const verificaCategoria = (imc) => {
    if (imc <= 18.5) {
        return  "baixo peso";
    }
    else if (imc >= 18.6 && imc <= 24.9) {
        return "peso normal";
    }
    else if (imc >= 25 && imc <= 29.9) {
        return "sobrepeso";
    }
    else if (imc >= 30 && imc <= 34.9) {
        return "obesidade grau I"
    }
    else if (imc >= 35 && imc <= 39.9) {
        return "obesidade grau II"
    }
    else {
        return "obesidade grau III"
    }
}

const escreveResultado = (resultado) => {
    const p = document.querySelector('#resultado')
    p.innerText = resultado;
}