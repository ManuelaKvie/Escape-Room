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
                afirmacao: "Agora racismo não é mais crime, retornando ao cenário da Segunda Guerra Mundial, as pessoas vão se eliminar através da violência, tornando a falta de pobreza um fator irreverente.",
            },
            {
                texto: "Eliminar permanentemente a ocorrência de práticas sexuais criminosas (pedofilia, necrofilia, zoofilia…), mas tirar todos os homens dos cargos de liderança social e empresarial.",
                afirmacao: "Parabéns! Crimees sexuais não existem mais. Entretanto, agora o cenário patriarcal se reverteu e os homens terão que lutar por seus direitos básicos.",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "O surgimento de uma fonte inesgotável de água potável, garantindo a subsistência das nações futuras,  mas descriminalizar a caça irregulamentada de animais silvestres.",
                afirmacao: "A fauna mundial, 50 anos depois se resume a três espécies domésticas, e a sociedade prev~e um fim breve pelo desequilíbrio dos sistemas ambientais.",
            },
            {
                texto: "Petrificar o aquecimento global no estágio já atingido de danificação, impedindo o agravamento de seus problemas, mas tornar todas as praias e mares inabitáveis e inacessíveis para seres humanos.",
                afirmacao: "Parabéns, as comunidades dependentes e turismo e pesca padeceram, mas a subsitência das próximas gerações já não depende do clima.",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "Possibilitar a cura do câncer através de substituição cibernética de órgãos atingidos, mas só alcançar tal solução usando pessoas em situação de rua como cobaias obrigatoriamente fatais.",
                afirmacao: "A população em situação de rua foi dizimada, mas com isso pessoas doentes em manicômios, sistemas prisionais, e posteriormente famílias inscritas no CadÚnico viraram os alvos das pesquisas. Em 50 anos, a população mundial se reduz em 70%, e as desigualdades sociais se multiplicam a níveis imensuráveis.",
            },
            {
                texto: "A criação de um sistema universal de distribuição de alimentos e recursos, abolindo a fome no mundo, mas também universalizar o monitoramento constante de todas as atitudes individuais por inteligência do governo.",
                afirmacao: "A fome e a desigualdade não são mais problema, entretanto a liberdade das pessoas agora é um conceito desconhecido.",
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;
let hitoriafinal = " ";

function mostraPergunta (){
    if (atual >= perguntas.length){
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
    const afirmações = pergunta.afirmacao;
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