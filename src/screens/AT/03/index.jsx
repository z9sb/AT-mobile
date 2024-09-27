import { useState } from 'react'
import style from './At_03.module.css'

function Card(){
const img_url = 'https://png.pngtree.com/recommend-works/png-clipart/20240516/ourmid/pngtree-cat-with-glasses-meme-sticker-tshirt-illustration-png-image_12476682.png'
  return (
    <div className={style.card}>
      <img src={img_url} alt="" />
    </div>
  )
}

export default function AT_03() {
  const [cards, setCards] = useState(1)

  const renderizar = () =>{
    let cardElements = []
    for (let i = 0; i < cards; i++){
      cardElements.push(<Card key={i}/>);
    }
    return cardElements
  };
  return (
    <div className={style.homeCards}>
      <div className={style.menu}>
        <button onClick={() => {setCards(cards + 1)}}>+</button>
        <span>{cards}</span>
        <button onClick={() => {setCards(cards - 1)}}>-</button>
      </div>
      <div className={style.cardsShow}>
        {renderizar()}
      </div>
    </div>
  )
}
