const questions = [
    {
        question: "Qual órgão deve atuar na prevenção e no gerenciamento de desastres naturais como as enchentes no Brasil?",
        answers: [
            {id: 1, text: "INMET", correct:false},
            {id: 2, text: "IBGE", correct:false},
            {id: 3, text: "Receita Federal", correct:false},
            {id: 4, text: "Defesa CIvil", correct:true}
        ],
    },
    {
        question: "Como o descarte incorreto de lixo contribui para as enchentes?",
        answers: [
            {id: 1, text: "Aumenta a temperatura da água", correct:false},
            {id: 2, text: "Bloqueia o escoamento da água em bueiros e canais", correct:true},
            {id: 3, text: "Deixa o solo mais fértil", correct:false},
            {id: 4, text: "Faz chover com mais frequência", correct:false}
        ],
    },
    {
        question: "Qual destas doenças é comum após enchentes?",
        answers: [
            {id: 1, text: "Sarampo", correct:false},
            {id: 2, text: "Catapora", correct:false},
            {id: 3, text: "Anemia", correct:false},
            {id: 4, text: "Leptospirose", correct:true}
        ],
    },
    {
        question: "Qual região do Brasil costuma ser mais afetada por enchentes durante o verão?",
        answers: [
            {id: 1, text: "Norte", correct:false},
            {id: 2, text: "Nordeste", correct:false},
            {id: 3, text: "Sudeste", correct:true},
            {id: 4, text: "Centro-Oeste", correct:false}
        ],
    },
    {
        question: "Qual método o estado de São Paulo utiliza para evitar as enchentes nas cidades?",
        answers: [
            {id: 1, text: "Muros de proteção", correct:false},
            {id: 2, text: "Piscinões", correct:true},
            {id: 3, text: "Barreiras contra o mar", correct:false},
            {id: 4, text: "Túneis para água", correct:false}
        ],
    },
    {
        question: "Qual destas ações NÃO contribui para a prevenção de enchentes?",
        answers: [
            {id: 1, text: "Plantio de árvores", correct:false},
            {id: 2, text: "Construção de calçadas permeáveis", correct:false},
            {id: 3, text: "Descarte de lixo em terrenos baldios", correct:true},
            {id: 4, text: "Manutenção de canais de drenagem", correct:false}
        ],
    },
    {
        question: "As mudanças climáticas têm qual efeito sobre as enchentes?",
        answers: [
            {id: 1, text: "Reduzem o número de chuvas no país", correct:false},
            {id: 2, text: "Tornam os rios mais profundos", correct:false},
            {id: 3, text: "Intensificam as chuvas e aumentam a frequência de eventos extremos", correct:true},
            {id: 4, text: "Diminuem a temperatura da água da chuva", correct:false}
        ],
    },
    {
        question: "O que pode ser feito para reduzir os risco de enchentes nas cidades?",
        answers: [
            {id: 1, text: "Construir casas nas margens dos rios", correct:false},
            {id: 2, text: "Reduzir a vegetação urbana", correct:false},
            {id: 3, text: "Aumentar a pavimentação de ruas", correct:false},
            {id: 4, text: "Investir em drenagem e planejamento urbano", correct:true}
        ],
    },
    {
        question: "Quais são os principais sinais de risco antes de uma enchente?",
        answers: [
            {id: 1, text: "Dias muito quentes e secos", correct:false},
            {id: 2, text: "Céu limpo e vento forte", correct:false},
            {id: 3, text: "Nuvens carregadas, rios cheios e chuva constante", correct:true},
            {id: 4, text: "Neve e granizo", correct:false}
        ],
    },
    {
        question: "Como o uso de calçadas e ruas asfaltadas pode contribuir para enchentes?",
        answers: [
            {id: 1, text: "Absorvem toda a água da chuva", correct:false},
            {id: 2, text: "Permitem o escoamento natural da água", correct:false},
            {id: 3, text: "Impedem a infiltração da água no solo", correct:true},
            {id: 4, text: "Aumentam a vegetação urbana", correct:false}
        ],
    },
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    let q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;

    let answersDiv = document.getElementById("answer-buttons");
    answersDiv.innerHTML = "";

    for (let i = 0; i < q.answers.length; i++) {
        let btn = document.createElement("button");
        btn.innerText = q.answers[i].text;
        btn.className = "btn";
        btn.onclick = function() {
            if (q.answers[i].correct) {
                score++;
                btn.style.background = "green";
            } else {
                btn.style.background = "red";
            }
            // Desabilita todos os botões
            let allBtns = answersDiv.querySelectorAll("button");
            allBtns.forEach(b => b.disabled = true);
            document.getElementById("next-btn").style.display = "block";
        };
        answersDiv.appendChild(btn);
    }
    document.getElementById("next-btn").style.display = "none";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById("question").innerText = "Você acertou " + score + " de " + questions.length + "!";
    document.getElementById("answer-buttons").innerHTML = "";
    document.getElementById("next-btn").innerText = "Jogar de novo";
    document.getElementById("next-btn").style.display = "block";
}

document.getElementById("next-btn").onclick = function() {
    if (currentQuestion < questions.length) {
        nextQuestion();
    } else {
        currentQuestion = 0;
        score = 0;
        document.getElementById("next-btn").innerText = "Próxima";
        showQuestion();
    }
};

showQuestion();