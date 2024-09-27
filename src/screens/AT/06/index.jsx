import { useState, useEffect } from "react";
import style from "./AT_06.module.css";
import CardItem from "./components/cardItem";
import { VscColorMode } from "react-icons/vsc";

export default function AT_06() {
  const [item, setItem] = useState([]);
  const [dark, setDark] = useState(false)

  const itens = {
    1: {
      nome: "Monitor",
      quantidade: 1,
      valorUnitario: 700,
    },
    2: {
      nome: "Monitor",
      quantidade: 1,
      valorUnitario: 700,
    },
  };

  useEffect(() => {
    setItem(Object.values(itens));
  }, []);

  return (
    <div className={dark? style.containerdark: style.container}>
      <button onClick={() => { setDark(!dark)}}><VscColorMode  size={35}/></button>
      <h2>Carrinho de compra</h2>
      <br />
      {item.map((item, idx) => {
        return <CardItem 
        item={item} 
        key={idx} 
        setItem={setItem} 
        idx={idx} 
        />;
      })}
      <button className={style.buttonComprar}>Comprar</button>
    </div>
  );
}
