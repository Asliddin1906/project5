
import { useContext } from "react";
import { CardsContext } from "../../contexts/cards";
import Card from "../card/card";

import "./cards.scss"

const Cards = () => {
  
  const { paginatedCards }  = useContext(CardsContext);


  return ( 
    <div >
    <p className="title">Recent Posts</p>
    {paginatedCards?.map(card => <Card card={card} key={card.id} />)}
    </div>
  )
}



export default Cards;