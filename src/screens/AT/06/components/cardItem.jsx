import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import CardItemStyle from './cardItem.module.css'
import { IoTrashBinOutline } from "react-icons/io5";

export default function CardItem({ item, setItem, idx }) {
  const { nome, quantidade, valorUnitario } = item;

  const adicionarQuantidade = () => {
    setItem((prevItems) =>
      prevItems.map((itemAtual, index) => {
        return index === idx
          ? { ...itemAtual, quantidade: itemAtual.quantidade + 1 }
          : itemAtual;
      })
    );
  };

  const removerQuantidade = () => {
    setItem((prevItems) =>
      prevItems.map((itemAtual, index) => {
        return index === idx && itemAtual.quantidade > 0
          ? { ...itemAtual, quantidade: itemAtual.quantidade - 1 }
          : itemAtual;
      })
    );
  };

  const removerItem = () =>{
    setItem((prevItems) =>
        prevItems.filter((itemAtual, index) => {
          return index != idx
        })
      );
  } 
  return (
    <div className={CardItemStyle.container}>
      <p>{nome}</p>
      <button onClick={adicionarQuantidade}>
        <IoIosAdd size={20}/>
      </button>
      <span>{quantidade}</span>
      <button onClick={removerQuantidade}>
        <RiSubtractFill size={20}/>
      </button>
      <button onClick={removerItem}>
      <IoTrashBinOutline size={20}/></button>
      <p>Valor unitário: {valorUnitario}</p>
      <p>Valor total {quantidade * valorUnitario}</p>
    </div>
  );
}
