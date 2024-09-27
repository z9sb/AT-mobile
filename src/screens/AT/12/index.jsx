import { useState, useEffect } from "react";
import CardItem from "./components/cardItem";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

export default function AT_12() {
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
    <div>
      <Typography 
      variant="h3">
        Carrinho de compra
      </Typography>

      <br />
      {item.map((item, idx) => {
        return <CardItem 
        item={item} 
        key={idx} 
        setItem={setItem} 
        idx={idx}
        />;
      })}
      <Button 
      variant="outlined" >
        Comprar
      </Button>
    </div>
  );
}
