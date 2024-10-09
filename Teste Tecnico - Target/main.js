// ------------------------Função para validar e exibir a resposta da sequência de Fibonacci---------------------- //



document.getElementById('check-button-fibonacci').addEventListener('click', function() {
    // Pega o número do input
    let num = parseInt(document.getElementById('number-input').value);

    // Verifica se o número é parte da sequência
    let resultText;
    let isValid = Fibonacci(num);

    if (isValid) {
        resultText = `${num} pertence à sequência de Fibonacci.`;
        document.getElementById('result-fibonacci').style.color = 'green'; 
    } else {
        resultText = `${num} não pertence à sequência de Fibonacci.`;
        document.getElementById('result-fibonacci').style.color = 'red'; 
    }

    // Exibe o resultado no span de resultado
    document.getElementById('result-fibonacci').innerText = resultText;
});

function Fibonacci(num) {
    // defino os valores iniciais da sequência
    let a = 0;
    let b = 1;

    // Verifico se o número informado é 0 ou 1
    if (num === 0 || num === 1) {
        return true;
    }

    // Calculo o próximo número da sequência somando os dois números anteriores (F(2) = F(0) + F(1))
    let next = a + b;

    // Enquanto o próximo número da sequência for menor ou igual ao número informado, continuar iterando
    while (next <= num) {
        if (next === num) {
            return true;
        }
        a = b;
        b = next;
        next = a + b;
    }

    // Se o número não foi encontrado na sequência até esse ponto, retorno false
    return false;
}



// -------------------------Função para validar e exibir a resposta sobre a letra 'a'---------------------------- //



document.getElementById('check-button-aLetter').addEventListener('click', function() {
    // Pego a string do input
    let text = document.getElementById('text-input').value;

    // Converto a string para um array e conto o length de 'a' e 'A'
    let lowerCaseCount = [...text].filter(char => char === 'a').length;
    let upperCaseCount = [...text].filter(char => char === 'A').length;

    let totalCount = lowerCaseCount + upperCaseCount;

    // Mensagem de resultado sendo gerada
    let resultText;
    let isValid = totalCount > 0;

    if (isValid) {
        resultText = `A letra 'a' (minúscula) aparece ${lowerCaseCount} vez(es) e a letra 'A' (maiúscula) aparece ${upperCaseCount} vez(es). No total, a letra 'a' aparece ${totalCount} vez(es).`;
        document.getElementById('result-aLetter').style.color = 'green'; 
    } else {
        resultText = `A letra 'a' ou 'A' não aparece na string.`;
        document.getElementById('result-aLetter').style.color = 'red'; 
    }

    // Exibo o resultado no span
    document.getElementById('result-aLetter').innerText = resultText;
});



// ------------------------------Função para validar e exibir o valor da soma----------------------------------- //



document.getElementById('check-button-soma').addEventListener('click', function() {
    // Calculo o valor da soma
    let soma = calcularSoma();

    // Exibo o resultado no span
    let resultText = `O valor da variável SOMA é: ${soma}`;


    document.getElementById('result-soma').style.color = 'green'; 
    document.getElementById('result-soma').innerText = resultText;
});

function calcularSoma() {
    let INDICE = 12;
    let SOMA = 0;
    let K = 1;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    return SOMA;
}

