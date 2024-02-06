const perguntas = [
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        respostas: [
            "==",
            "===",
            "="
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "shift()",
            "splice()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método JavaScript é usado para ordenar elementos em um array?",
        respostas: [
            "order()",
            "sort()",
            "arrange()"
        ],
        correta: 1
    },
    {
        pergunta: "O que o método 'isNaN()' retorna se o argumento não for um número?",
        respostas: [
            "true",
            "false",
            "NaN"
        ],
        correta: 0
    },
    {
        pergunta: "Como você escreve 'Hello World' em um elemento HTML usando JavaScript?",
        respostas: [
            "document.write('Hello World')",
            "console.log('Hello World')",
            "innerHTML = 'Hello World'"
        ],
        correta: 2
    },
    {
        pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
        respostas: [
            "print()",
            "echo()",
            "console.log()"
        ],
        correta: 2
    },
    {
        pergunta: "O que o método 'charAt()' retorna se o índice passado for maior que o comprimento da string?",
        respostas: [
            "undefined",
            "null",
            "Erro"
        ],
        correta: 0
    },
    {
        pergunta: "Qual função é usada para converter uma string em minúsculas em JavaScript?",
        respostas: [
            "toUpperCase()",
            "toLowerCase()",
            "toLower()"
        ],
        correta: 1
    },
    {
        pergunta: "Qual dos seguintes é um tipo de dados primitivo em JavaScript?",
        respostas: [
            "Array",
            "Object",
            "String"
        ],
        correta: 2
    }
];
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')



for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}