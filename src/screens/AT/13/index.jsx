import React, { useState } from "react";
import style from "./AT_13.module.css";

const perguntas = [
  {
    pergunta: "Qual é o principal objetivo do design mobile-first?",
    opcoes: [
      "Priorizar o conteúdo e a usabilidade em dispositivos móveis.",
      "Criar um site com muitos gráficos e animações.",
      "Desenvolver um site apenas para desktops.",
      "Focar em conteúdo estático e fixo.",
    ],
    resposta: "Priorizar o conteúdo e a usabilidade em dispositivos móveis.",
  },
  {
    pergunta: "O que acontece se você não adotar uma abordagem mobile-first?",
    opcoes: [
      "O site terá uma ótima performance em dispositivos móveis.",
      "O site pode ser menos amigável em dispositivos móveis.",
      "O site funcionará melhor em todos os dispositivos.",
      "Não terá impacto algum na usabilidade.",
    ],
    resposta: "O site pode ser menos amigável em dispositivos móveis.",
  },
  {
    pergunta: "O que significa a abordagem 'mobile-first' no design responsivo?",
    opcoes: [
      "Começar o design a partir de telas grandes e depois adaptá-lo para telas menores.",
      "Começar o design a partir de telas pequenas e depois adaptá-lo para telas maiores.",
      "Criar um design fixo que não se adapta a diferentes tamanhos de tela.",
      "Ignorar os dispositivos móveis e focar apenas em desktops.",
    ],
    resposta:
      "Começar o design a partir de telas pequenas e depois adaptá-lo para telas maiores.",
  },
  {
    pergunta:
      "Qual é a principal vantagem de adotar uma abordagem 'mobile-first' no desenvolvimento web?",
    opcoes: [
      "Garantir que o site funcione bem em qualquer tamanho de tela.",
      "Economizar tempo e recursos na criação do design.",
      "Melhorar o desempenho em dispositivos móveis.",
      "Permitir o uso de gráficos mais complexos.",
    ],
    resposta: "Melhorar o desempenho em dispositivos móveis.",
  },
  {
    pergunta: "Em CSS, qual é a melhor prática ao implementar o 'mobile-first'?",
    opcoes: [
      "Usar media queries para telas maiores.",
      "Começar o design com estilos para desktop.",
      "Usar um layout fixo e não flexível.",
      "Aplicar estilos padrão para dispositivos móveis e ajustar para telas maiores.",
    ],
    resposta:
      "Aplicar estilos padrão para dispositivos móveis e ajustar para telas maiores.",
  },
  {
    pergunta: "Qual unidade de medida é mais recomendada para design 'mobile-first' em CSS?",
    opcoes: ["px", "em", "rem", "%"],
    resposta: "rem",
  },
  {
    pergunta: "Por que 'mobile-first' é uma abordagem eficiente para SEO?",
    opcoes: [
      "Porque os sites são indexados apenas no desktop.",
      "Porque os mecanismos de busca priorizam conteúdo adaptado para dispositivos móveis.",
      "Porque não é necessário implementar SEO em dispositivos móveis.",
      "Porque o conteúdo é oculto em dispositivos móveis.",
    ],
    resposta:
      "Porque os mecanismos de busca priorizam conteúdo adaptado para dispositivos móveis.",
  },
  {
    pergunta: "Qual desses frameworks é conhecido por adotar uma abordagem 'mobile-first'?",
    opcoes: ["Bootstrap", "jQuery", "React", "Angular"],
    resposta: "Bootstrap",
  },
  {
    pergunta: "Qual propriedade CSS é essencial para criar layouts flexíveis em 'mobile-first'?",
    opcoes: ["float", "display: grid", "display: flex", "position"],
    resposta: "display: flex",
  },
  {
    pergunta:
      "Ao usar media queries em um design 'mobile-first', qual é a prática comum?",
    opcoes: [
      "Especificar estilos para telas menores e adicionar media queries para telas maiores.",
      "Especificar estilos para telas maiores e adicionar media queries para telas menores.",
      "Usar media queries apenas para ocultar elementos.",
      "Evitar o uso de media queries.",
    ],
    resposta:
      "Especificar estilos para telas menores e adicionar media queries para telas maiores.",
  },
];

export default function AT_13() {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [mostrarPontuacao, setMostrarPontuacao] = useState(false);
  const [modoEscuro, setModoEscuro] = useState(false);

  const handleOpcaoRespostaClick = (opcaoSelecionada) => {
    if (opcaoSelecionada === perguntas[perguntaAtual].resposta) {
      setPontuacao(pontuacao + 1);
    }

    const proximaPergunta = perguntaAtual + 1;
    if (proximaPergunta < perguntas.length) {
      setPerguntaAtual(proximaPergunta);
    } else {
      setMostrarPontuacao(true);
    }
  };

  const handleReiniciarQuiz = () => {
    setPerguntaAtual(0);
    setPontuacao(0);
    setMostrarPontuacao(false);
  };

  return (
    <div
      className={`${style.container} ${modoEscuro ? style.dark : style.light}`}
    >
      <div>
        <button
          className={style.toggleButton}
          onClick={() => setModoEscuro(!modoEscuro)}
        >
          Mudar para {modoEscuro ? "Modo Claro" : "Modo Escuro"}
        </button>
        {mostrarPontuacao ? (
          <div className={style.scoreSection}>
            Você acertou {pontuacao} de {perguntas.length} questões!
            <button onClick={handleReiniciarQuiz}>Reiniciar Quiz</button>
          </div>
        ) : (
          <div className={style.quizSection}>
            <div className={style.questionSection}>
              <div className={style.questionCount}>
                <span>Pergunta {perguntaAtual + 1}</span>/{perguntas.length}
              </div>
              <div className={style.questionText}>
                {perguntas[perguntaAtual].pergunta}
              </div>
            </div>
            <div className={style.answerSection}>
              {perguntas[perguntaAtual].opcoes.map((opcao, index) => (
                <button
                  key={index}
                  onClick={() => handleOpcaoRespostaClick(opcao)}
                >
                  {opcao}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
