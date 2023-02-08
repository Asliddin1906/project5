import clock from "../../assets/img/clock.png"
import  "./single-card.scss"

const SingleCards = ({card}) => {
  return (
    <>
      <div className="card">
        <h3 className="card-heading">User interface</h3>
          <div className="card-title" to={`/card/${card.id}`}>
            {card.title}
          </div>
        <div className="card-time">
          <time className="card-reading">{card.date}</time>|
          <img src={clock} alt="" className="clock"/> {card.likes} minutes read
        </div>
      </div>
    </>
  )
}

export default SingleCards;