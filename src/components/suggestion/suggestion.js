import right from "../../assets/img/right-vector.png"
import facebook from "../../assets/img/facebook.png"
import catLogo from "../../assets/img/cat-logo.png"
import twitter from "../../assets/img/twitter.png"
import inLogo from "../../assets/img/in.png"

import "./suggestion.scss"



const Suggestion = () => {
  return (
    <div  className="suggestion">
      <h1>What I do!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.</p>
      <section className="suggestion-link">
      <span>EXPLORE ME</span>
      <img src={right} alt="" className="suggestion-link__vector"/>
      </section>
      <div className="connections">
        <a href="https://m.facebook.com/" className="suggestion-img">
        <img src={facebook} alt="" />
        </a>
        <a href="/" className="suggestion-img">
        <img src={catLogo} alt="" />
        </a>
        <a href="https://twitter.com/" className="suggestion-img">
        <img src={twitter} alt=""  className="suggestion-img"/>
        </a>
        <a href="https://instagram.com/" className="suggestion-img">
        <img src={inLogo} alt=""  />
        </a>
      </div>
    </div>
  )
}

export default Suggestion;