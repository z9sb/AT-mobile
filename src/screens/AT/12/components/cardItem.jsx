import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { IoTrashBinOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

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
  };

  return (
    <Card sx={{ m: 0.5, p: 1 }}>
      <Typography variant="body1">{nome}</Typography>
      <Button 
      variant="outlined" 
      onClick={adicionarQuantidade}>
        <IoIosAdd size={20}/>
      </Button>
      <span>{quantidade}</span>
      <Button 
      variant="outlined" 
      onClick={removerQuantidade}>
        <RiSubtractFill size={20}/>
      </Button>
      <Button 
      variant="outlined"
      onClick={removerItem}>
      <IoTrashBinOutline size={20}/>
      </Button>
      <Typography variant="body1">Valor unitário: {valorUnitario}</Typography>
      <Typography variant="body1">Valor total {quantidade * valorUnitario}</Typography>
    </Card>
  );
}
