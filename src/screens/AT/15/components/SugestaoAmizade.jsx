import style from './sugestao.module.css'

function Amizade({ propiedade }) {
    return (
      <div className={style.cardSugestao}>
        <img src={propiedade.img} alt={propiedade.alt} />
        <p>{propiedade.nome}</p>
        <p>Amigo em comum: {propiedade.amigoComum}</p>
      </div>
    );
  }

export default function SugestaoAmizade({ sugestoes }) {
  return (
    <div className={style.sugestoesContainer}>
      <h3>Sugestões de Amizade</h3>
      <div className={style.sugestaoamigos}>
        {Object.values(sugestoes).map((e, index) => (
          <Amizade key={index} propiedade={e} />
        ))}
      </div>
    </div>
  );
}
