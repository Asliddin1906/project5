import { Link } from "react-router-dom";

import "./card.scss"
import clock from "../../assets/img/clock.png"
const Card = ({ card }) => {
  return (
    <>
    <article className="card-body">
      <div>
      <time className="card-time">{card.date}</time>
      <h3 className="card-title"><Link to={`/card/${card.id}`}>{card.title}</Link></h3>
      <div className="readtime-box"><img src={clock} alt="" />{card.minutes}</div>
      </div>
      <div>
      <span className="card-type">{card.type}</span>
      </div>
    </article>
    
      <hr className="hr"/>
    </>
  );
}

export default Card;