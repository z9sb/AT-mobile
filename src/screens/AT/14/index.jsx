import { useState } from "react";
import { FaHome } from "react-icons/fa";
import style from "./AT_14.module.css";

const topicoPrincipal = {
  titulo: "ARQUIVO",
  subtitulo: "Arquivo em pdf",
  descricao:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero harum sed, impedit quaerat sit minima repellat, maxime provident esse fuga non autem molestias veniam reiciendis nam, laudantium dolor doloremque. Odit.",
  autor: "ABC",
  dataPublicacao: "2024-09-20",
  curtidas: 20,
  respostas: 6,
};

const respostas = {
  1: {
    topico:
      "Concordo plenamente com o tópico abordado, especialmente sobre a importância da fuga não autorizada de informações.",
    autor: "João Silva",
    dataPublicacao: "2024-09-20",
    curtidas: 15,
  },
  2: {
    topico:
      "Achei muito interessante o ponto sobre a maximização da proteção dos dados, algo que devemos explorar mais.",
    autor: "Maria Fernandes",
    dataPublicacao: "2024-09-21",
    curtidas: 8,
  },
  3: {
    topico:
      "Há algumas questões na descrição que podem ser melhor explicadas, como o papel das regulamentações internacionais.",
    autor: "Carlos Pereira",
    dataPublicacao: "2024-09-22",
    curtidas: 12,
  },
  4: {
    topico:
      "Ótimo trabalho! Acho que a parte sobre o impacto no setor tecnológico merece um estudo mais profundo.",
    autor: "Ana Costa",
    dataPublicacao: "2024-09-22",
    curtidas: 20,
  },
  5: {
    topico:
      "Discordo em parte, acredito que a abordagem pode ser ampliada para incluir a ética na proteção de dados.",
    autor: "Pedro Oliveira",
    dataPublicacao: "2024-09-23",
    curtidas: 5,
  },
  6: {
    topico:
      "É um tópico essencial para ser discutido nos dias de hoje, especialmente com o crescimento da inteligência artificial.",
    autor: "Fernanda Lima",
    dataPublicacao: "2024-09-24",
    curtidas: 10,
  },
};

const topicosMaisRecentes = [
  "Inteligência Artificial e o Futuro",
  "Proteção de Dados na Era Digital",
  "Desafios do Setor de Tecnologia",
  "A Ética na Automação",
  "Impacto da Inteligência Artificial no Mercado de Trabalho",
];

const topicosMaisRespondidos = [
  "A Ética na Automação",
  "Inteligência Artificial e o Futuro",
  "Desafios do Setor de Tecnologia",
  "Impacto da Inteligência Artificial no Mercado de Trabalho",
  "Proteção de Dados na Era Digital",
];

const topicosMaisCurtidos = [
  "Inteligência Artificial e o Futuro",
  "Proteção de Dados na Era Digital",
  "Desafios do Setor de Tecnologia",
  "A Ética na Automação",
  "Impacto da Inteligência Artificial no Mercado de Trabalho",
];

export default function AT_14() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={style.principal}>
      <div className={style.container}>
        <section>
          <img
            src="https://lms.infnet.edu.br/moodle/pluginfile.php/1/theme_remui/logomini/1722631119/infnet.png"
            alt="Logo"
            className={style.logo}
          />
        </section>

        <section className={`${style.menu} ${menuOpen ? style.menuOpen : ""}`}>
          <menu
            className={`${style.menuTag} ${
              menuOpen ? style.menuOpen : style.menuHide
            }`}
          >
            <nav>
              <ul className={style.menuOptions}>
                <li>
                  <a href="">Principal</a>
                </li>
                <li>
                  <a href="">Comentários</a>
                </li>
                <li>
                  <a href="">Mais</a>
                </li>
              </ul>
            </nav>
          </menu>
          <a href="#">
            <FaHome size={35} className={style.FaHome} onClick={toggleMenu} />
          </a>
        </section>
      </div>
      <div className={style.home}>
        <h1>{topicoPrincipal.titulo}</h1>
        <h2>{topicoPrincipal.subtitulo}</h2>
        <p>{topicoPrincipal.descricao}</p>
        <p>{topicoPrincipal.dataPublicacao}</p>
        <button>Curtidas {topicoPrincipal.curtidas}</button>
        <button>Respostas {topicoPrincipal.respostas}</button>
        <div className={style.textResposta}>
          <textarea name="respota" id="resposta"></textarea>
          <button>Enviar</button>
        </div>
      </div>
      <div className={style.card}>
        {Object.values(respostas).map((e, idx) => {
          return (
            <div className={style.carditem}>
              <p>
                <strong>{e.autor}</strong>
              </p>
              <p>Resposta: {e.topico}</p>
              <p>Data de publicação: {e.dataPublicacao}</p>
              <span>Curtidas: {e.curtidas}</span>
            </div>
          );
        })}
      </div>
      <div className={style.topicos}>
        <div className={style.topicoCard}>
          <h2>Topicos mais curtidos</h2>
          <ul>
            {topicosMaisCurtidos.map((e, idx) => {
              return <li key={idx}>{e}</li>;
            })}
          </ul>
        </div>
        <div className={style.topicoCard}>
          <h2>Topicos mais rescentes</h2>
          <ul>
            {topicosMaisRecentes.map((e, idx) => {
              return <li key={idx}>{e}</li>;
            })}
          </ul>
        </div>
        <div className={style.topicoCard} id={style.topicoCardRespondido}>
          <h2>Topicos mais respondidos</h2>
          <ul>
            {topicosMaisRespondidos.map((e, idx) => {
              return <li key={idx}>{e}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
