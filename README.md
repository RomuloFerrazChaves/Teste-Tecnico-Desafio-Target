# Teste-Tecnico-Desafio-Target

Link para o projeto:

https://teste-tecnico-desafio-target.vercel.app/

## Questões

### Questão 1: Sequência de Fibonacci

A sequência de Fibonacci começa com 0 e 1, e cada número subsequente é a soma dos dois números anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21...). O objetivo é, dado um número informado, verificar se ele pertence à sequência de Fibonacci.

#### Solução:

O código abaixo foi implementado para verificar se um número pertence à sequência de Fibonacci.

```javascript
document.getElementById('check-button-fibonacci').addEventListener('click', function() {
    let num = parseInt(document.getElementById('number-input').value);
    let resultText;
    let isValid = Fibonacci(num);

    if (isValid) {
        resultText = ${num} pertence à sequência de Fibonacci.;
        document.getElementById('result-fibonacci').style.color = 'green'; 
    } else {
        resultText = ${num} não pertence à sequência de Fibonacci.;
        document.getElementById('result-fibonacci').style.color = 'red'; 
    }

    document.getElementById('result-fibonacci').innerText = resultText;
});

function Fibonacci(num) {
    let a = 0;
    let b = 1;

    if (num === 0 || num === 1) {
        return true;
    }

    let next = a + b;
    while (next <= num) {
        if (next === num) {
            return true;
        }
        a = b;
        b = next;
        next = a + b;
    }
    return false;
}
```

### Questão 2: Letra 'a' na string

Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

#### Solução:

O código abaixo foi implementado para verificar a existência da letra ‘a’, se são maiúsculas ou minúsculas, além de informar a quantidade de vezes em que ela ocorre.

```javascript
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
```

### Questão 3: Letra 'a' na string

Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?

#### Solução:

O código abaixo foi implementado para validar o valor da soma.

```javascript
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
```

### Questão 4: Lógica nas sequências

Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, ___
b) 2, 4, 8, 16, 32, 64, ____
c) 0, 1, 4, 9, 16, 25, 36, ____
d) 4, 16, 36, 64, ____
e) 1, 1, 2, 3, 5, 8, ____
f) 2,10, 12, 16, 17, 18, 19, ____

#### Solução:

A = 9,
B = 128,
C = 49,
D = 100,
E = 13,
F = 20,

### Questão 5: Lógica nos interruptores

Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?  

#### Solução:

Para resolver esse problema, eu começaria ligando o interruptor A e o deixaria ligado por alguns minutos, o suficiente para a lâmpada esquentar. Eu saberia que, dessa forma, a lâmpada teria tempo para aquecer. Após isso, desligaria o interruptor A e ligaria o interruptor B, deixando-o ligado enquanto o interruptor C permaneceria desligado.

Depois, eu iria até a sala das lâmpadas. Ao entrar, perceberia que haveriam três possibilidades: uma lâmpada acesa, uma lâmpada quente, mas apagada, e uma lâmpada apagada e fria. A lâmpada acesa seria a controlada pelo interruptor B, já que seria o único que ficaria ligado o tempo todo. A lâmpada quente, mas apagada seria controlada pelo interruptor A, pois eu a teria deixado ligada por um tempo e, ao desligá-la, ela ainda estaria aquecida. Por último, a lâmpada apagada e fria seria controlada pelo interruptor C, que nunca teria sido ligado, então estaria fria e apagada.

Com isso, eu seria capaz de descobrir qual interruptor controla cada uma das lâmpadas, utilizando apenas duas idas até a sala delas.
