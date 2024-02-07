const perguntas = [
    {
        pergunta: "O que significa a sigla DOM em JavaScript?",
        respostas: [
            "Documento de Objetos Múltiplos",
            "Documento de Objeto Modelo",
            "Modelo de Objeto de Documento",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do operador '===' em comparações em JavaScript?",
        respostas: [
            "Compara valores e tipos de dados, sem coerção",
            "Compara apenas os valores, permitindo coerção",
            "Compara apenas os tipos de dados, ignorando os valores",
        ],
        correta: 1
    },
    {
        pergunta: "Como se declara uma variável em JavaScript?",
        respostas: [
            "let myVar;",
            "variable myVar;",
            "var myVar;",
        ],
        correta: 0
    },
    {
        pergunta: "O que é o 'hoisting' em JavaScript?",
        respostas: [
            "Um método de elevação física de elementos na página",
            "Uma técnica de otimização de código",
            "O comportamento de mover declarações para o topo do escopo",
        ],
        correta: 2
    },
    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "array.push()",
            "array.add()",
            "array.append()",
        ],
        correta: 0
    },
    {
        pergunta: "O que é um callback em JavaScript?",
        respostas: [
            "Um tipo de função que é chamada automaticamente",
            "Uma função passada como argumento para outra função e executada posteriormente",
            "Uma variável que armazena funções",
        ],
        correta: 1
    },
    {
        pergunta: "Como se faz uma requisição assíncrona em JavaScript?",
        respostas: [
            "Usando a palavra-chave 'sync' antes da função",
            "Utilizando a função 'waitAsync()'",
            "Usando 'async' antes da declaração da função e 'await' para a espera",
        ],
        correta: 2
    },
    {
        pergunta: "O que é o JSON em JavaScript?",
        respostas: [
            "JavaScript Object Notation - uma forma de organizar código JavaScript",
            "JavaScript Oriented Notation - uma técnica de programação avançada",
            "JavaScript Order Navigation - uma técnica de navegação em páginas da web",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
        respostas: [
            "São iguais, apenas sinônimos",
            "Null representa a ausência de valor atribuído intencionalmente, enquanto undefined indica falta de atribuição",
            "Undefined é usado para valores nulos em arrays",
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é utilizado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "array.removeLast()",
            "array.pop()",
            "array.deleteLast()",
        ],
        correta: 1
    },
];


const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');


/* Pra cada item da pergunta */
for (const item of perguntas) {

    const quizItem = template.content.cloneNode(true);/* Clonar  o Item */
    quizItem.querySelector('h3').textContent = item.pergunta; /* Pegar o h3 do html e escrever as perguntas com base no array */

    for(let respostas of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = respostas


        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove() /* Remover o primeiro dt */








    /* Coloca a pergunta na tela */
    quiz.appendChild(quizItem) 

}