const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-principal');
const caixaAlternativas = document.querySelector('.caixa-principal');
const caixaResultado = document.querySelector('.caixa-principal');
const textoResultado = document.querySelector('.caixa-principal');

const perguntas = [
    {
        enunciado: "Dilema Social, o você escolhe?",
        alternativas: [
            {
                texto: "Fazer a redistribuição de riqueza geral entre as pessoas, eliminando a desigualdade social, mas descriminalizar internacionalmente o Racismo.",
                afirmação: "afirmação",
            },
            {
                texto: "Eliminar permanentemente a ocorrência de práticas sexuais criminosas (pedofilia, necrofilia, zoofilia…), mas tirar todos os homens dos cargos de liderança social e empresarial.",
                afirmação: "afirmação",
            }

        ]
    },

    {
        enunciado: "Dilema Ambiental, o você escolhe?",
        alternativas: [
            {
                texto: "O surgimento de uma fonte inesgotável de água potável, garantindo a subsistência das nações futuras,  mas descriminalizar a caça irregulamentada de animais silvestres.",
                afirmação: "afirmação",
            },
            {
                texto: "Petrificar o aquecimento global no estágio já atingido de danificação, impedindo o agravamento de seus problemas, mas tornar todas as praias e mares inabitáveis e inacessíveis para seres humanos.",
                afirmação: "afirmação",
            }

        ]
    },

    {
        enunciado: "Dilema Tecnológico, o você escolhe?",
        alternativas: [
            {
                texto: "Possibilitar a cura do câncer através de substituição cibernética de órgãos atingidos, mas só alcançar tal solução usando pessoas em situação de rua como cobaias obrigatoriamente fatais.",
                afirmação: "afirmação",
            },
            {
                texto: "A criação de um sistema universal de distribuição de alimentos e recursos, abolindo a fome no mundo, mas também universalizar o monitoramento constante de todas as atitudes individuais por inteligência do governo.",
                afirmação: "afirmação",
            }

        ]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta (){
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta ();