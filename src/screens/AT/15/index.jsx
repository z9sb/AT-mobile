import style from "./AT_15.module.css";
import Menu from "./components/Menu.jsx";
import ShowAmigo from "./components/Amizade.jsx";
import Feed from "./components/Feed.jsx";
import SugestaoAmizade from "./components/SugestaoAmizade.jsx";

const postInfo = {
  1: {
    titulo: "Meu Primeiro Post",
    img: "https://images.uncyc.org/pt/a/ad/Buzz-gay1.jpg",
    alt: "Imagem do post",
    descricao: "Este é o conteúdo do meu primeiro post.",
    data: "12 de Setembro de 2024",
    autor: "João Silva",
    curtida: "Curtir",
    compartilhamentos: "Compartilhar",
    comentários: "Comentar",
  },
  2: {
    titulo: "Meu Segundo Post",
    img: "https://www.lance.com.br/galerias/wp-content/uploads/2022/03/luva-de-pedreiro-memes-16-544x474.jpg",
    alt: "Imagem do post",
    descricao: "Este é o conteúdo do meu segundo post.",
    data: "13 de Setembro de 2024",
    autor: "João Silva",
    curtida: "Curtir",
    compartilhamentos: "Compartilhar",
    comentários: "Comentar",
  },
};

const sugestaoAmizadeInfo = {
  1: {
    img: "https://m.media-amazon.com/images/I/81nwAtnN-UL._AC_UF894,1000_QL80_.jpg",
    alt: "Imagem sugestões",
    nome: "Chaulin matador de porco",
    amigoComum: "João Silva",
  },
  2: {
    img: "https://m.media-amazon.com/images/I/81nwAtnN-UL._AC_UF894,1000_QL80_.jpg",
    alt: "Imagem sugestões",
    nome: "José da Silva",
    amigoComum: "Maria Oliveira",
  },
  
};

const amigosInfo = {
  1: {
    img: "https://m.media-amazon.com/images/I/81nwAtnN-UL._AC_UF894,1000_QL80_.jpg",
    alt: "Imagem amigo",
    nome: "Ana Souza",
    quantidade: "5",
  },
  2: {
    img: "https://m.media-amazon.com/images/I/81nwAtnN-UL._AC_UF894,1000_QL80_.jpg",
    alt: "Imagem amigo",
    nome: "Carlos Pereira",
    quantidade: "3",
  },
  3: {
    img: "https://m.media-amazon.com/images/I/81nwAtnN-UL._AC_UF894,1000_QL80_.jpg",
    alt: "Imagem amigo",
    nome: "Marcos Ryan",
    quantidade: "1",
  },
};

export default function AT_15() {
  return (
    <div className={style.container}>
      <Menu />
      <div className={style.bodym}>
        <ShowAmigo amigoInfo={amigosInfo} />
        <Feed postInfo={postInfo} />
        <SugestaoAmizade sugestoes={sugestaoAmizadeInfo} />
      </div>
    </div>
  );
}
