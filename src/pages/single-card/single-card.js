import { useContext } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/card/card";
import { CardsContext } from "../../contexts/cards";
import Head from "../../components/head/head"
import Likes from "../../components/likes/likes";
import Footer from "../footer/footer"
import bodyImg from "../../assets/img/body-img.png"
import SingleCards from "../../components/single-card/single-card";
import Filter from "../../components/filter/filter"

import "./single-card.scss"
import Container from "../../components/container/container";
const  SingleCard = () => {
  const { id } = useParams();
  const { cards } = useContext(CardsContext);

  const currentCard = cards?.find(card => card.id === +id);

  if (!currentCard) {
    return <h1>Hech narsa yo'q</h1>
  }
  



  return (
    
    <main>
      <Container>

      <div className="head">
      <Head/>
      <Filter/>
      </div>
      <div className="singleCard">
        <Likes className="likes"/>
        <div className="singleCard-body">
          <SingleCards card={currentCard} />
          {/* <form onSubmit={handleFormSubmit}>
            <p>Edit title:</p>
            <input ref={titleRef} defaultValue={currentCard.title} type="text" className="editInp" />
            <button className="editBtn">Submit</button>
          </form> */}
          <img src={bodyImg} alt="" className="singPageImg" />
          <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non imperdiet dui risus et elit.</article>
          <p className="infoTitle">Infomation overload</p>
          <article>Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit.uz nulla, viverra id suscipit quis, tristique a dolor. 
          ‘Designing For Sustainability, Tim Frick, 2014'</article>
          <p>Lessons Learnt: Best Practice</p>
          <ul>
            <li>Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl. Suspendisse.</li>
            <li>Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.</li>
          </ul>
          <p className="infoTitle">More like this</p>
          <Card card={currentCard} />
          <Card card={currentCard} />

        </div>
      </div>
        
      </Container>
      <Footer/>
    </main>
  )
}

export default SingleCard;