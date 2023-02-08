import { useContext } from "react";
import { CardsContext } from "../../contexts/cards";

import right from "../../assets/img/right-vector.png"
import left from "../../assets/img/left-vector.png"
import "./pagination.scss"


const Pagination = () => {
  const {filteredCards, setActivePageNumber } = useContext(CardsContext);


  if (!filteredCards){
    return null;
  }

  const pagesCount = Math.ceil(filteredCards.length / 10);

  const handlePaginationClick = (evt)=> {
    if (evt.target.matches("button")) {
      
      setActivePageNumber(+evt.target.dataset.id);

    }
  };

  return (
    <div div className="pagination">
    <img src={left} alt="" className="left"/>
    <ul onClick={handlePaginationClick} className="pages">
      {Array(pagesCount).fill().map((_, index) => (
        <li key={index}   className="numbers">
          <button data-id={index+1} key={index} className="number-btn">{index + 1}</button>
        </li>
      ))}
    </ul>
    <img src={right}  alt="" />
    </div>

  )
}

export default Pagination;
