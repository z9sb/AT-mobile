import style from './post.module.css'

export default function Post({ propiedade }) {
    return (
      <div className={style.Post}>
        <h2>{propiedade.titulo}</h2>
        <img src={propiedade.img} alt={propiedade.alt} />
        <p>{propiedade.descricao}</p>
        <p>{propiedade.data}</p>
        <h4>{propiedade.autor}</h4>
        <button>{propiedade.curtida}</button>
        <button>{propiedade.compartilhamentos}</button>
        <button>{propiedade.comentários}</button>
      </div>
    );
  }