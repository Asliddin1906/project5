import { createContext, useEffect, useState } from "react";
import { types } from "../consts";
import { getRndInteger } from "../utils";


export const CardsContext = createContext();


const CardsProvider = (props) => {
  const [ cards, setCards] = useState();
  const [filteredCards, setFilteredCards] = useState();
  const [ loading, setLoading ] = useState(false);
  const [activePageNumber, setActivePageNumber] = useState(1)
  const [paginatedCards, setPaginatedCards] = useState()

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        const cardsArray = data.map(card => {
          return {
            ...card,
            likes: getRndInteger(0, 100),
            date: new Date(`${getRndInteger(2001, 2023)}-${getRndInteger(1, 12)}-${getRndInteger(1, 28)}`).toDateString(),
            minutes: (`${(getRndInteger(1,10))} ${"minutes read"}`).toString(),
            type: types[getRndInteger(0, 5)],
          }
        })
        setCards(cardsArray);
        setFilteredCards(cardsArray);
        
      })
      .finally(() => setLoading(false))
  }, []);

  useEffect(()=>{
    if(filteredCards){
      setPaginatedCards(filteredCards.slice((activePageNumber - 1 )* 10, activePageNumber * 10))
    }
  }, [filteredCards, activePageNumber])

  if (loading) {
    return <p>Loading...</p>
  }

  return <CardsContext.Provider value={{cards, setCards, filteredCards, setFilteredCards, paginatedCards, setPaginatedCards, activePageNumber, setActivePageNumber }} {...props}/>}

export default CardsProvider;

