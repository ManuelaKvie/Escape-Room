const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativas: [
            {
                texto: "Fazer a redistribuição de riqueza geral entre as pessoas, eliminando a desigualdade social, mas descriminalizar internacionalmente o Racismo.",
                afirmacao: "afirmação",
            },
            {
                texto: "Eliminar permanentemente a ocorrência de práticas sexuais criminosas (pedofilia, necrofilia, zoofilia…), mas tirar todos os homens dos cargos de liderança social e empresarial.",
                afirmacao: "afirmação",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "O surgimento de uma fonte inesgotável de água potável, garantindo a subsistência das nações futuras,  mas descriminalizar a caça irregulamentada de animais silvestres.",
                afirmacao: "afirmação",
            },
            {
                texto: "Petrificar o aquecimento global no estágio já atingido de danificação, impedindo o agravamento de seus problemas, mas tornar todas as praias e mares inabitáveis e inacessíveis para seres humanos.",
                afirmacao: "afirmação",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "Possibilitar a cura do câncer através de substituição cibernética de órgãos atingidos, mas só alcançar tal solução usando pessoas em situação de rua como cobaias obrigatoriamente fatais.",
                afirmacao: "afirmação",
            },
            {
                texto: "A criação de um sistema universal de distribuição de alimentos e recursos, abolindo a fome no mundo, mas também universalizar o monitoramento constante de todas as atitudes individuais por inteligência do governo.",
                afirmacao: "afirmação",
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;
let hitoriafinal = " ";

function mostraPergunta (){
    if (atual >= perguntas.lenght){
        motraResultado ();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent ="";
    mostraAlternativa();
}

function mostraAlternativa (){
    for (const pergunta of perguntaAtual.alternativas) {
       const botaoAlternativa = document.createElement('button');
       botaoAlternativa.textContent = pergunta.texto;
       botaoAlternativa.addEventListener("click", ()=> respotasSelecionada(pergunta));
       caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respotasSelecionada (pergunta){
    const afirmações = pergunta.afirmação;
    hitoriafinal += afirmações + " ";
    atual++; 
    mostraPergunta ();  
}

function motraResultado (){
    caixaPerguntas.textContent = "Parabéns, você escolheu...";
    caixaResultado.textContent = hitoriafinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();