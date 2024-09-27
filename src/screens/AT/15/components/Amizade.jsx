import style from "./amizade.module.css";

function Amigo({ propiedade }) {
  return (
    <div className={style.cardAmigo}>
      <img src={propiedade.img} alt={propiedade.alt} />
      <p>{propiedade.nome}</p>
      <p>Amigos em comum: {propiedade.quantidade}</p>
    </div>
  );
}

export default function showAmigo({ amigoInfo }) {
  return (
    <div className={style.amigosContainer}>
      <h3>Amigos</h3>
      <div className={style.amigos}>
        {Object.values(amigoInfo).map((e, index) => (
          <Amigo key={index} propiedade={e} />
        ))}
      </div>
    </div>
  );
}
