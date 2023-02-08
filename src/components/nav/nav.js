import { Link } from "react-router-dom";
import "./nav.scss";
import bars from "../../assets/img/bars.png";
import close from "../../assets/img/close.png";
import {  useState } from "react";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className={click ? "nav-1 nav-active" : "nav"}>
        <form className="nav__list">
          <label className="nav__item">
            <Link to="*" className="nav__link nav__link--active">
              All
            </Link>
          </label>
          <label  className="nav__item">
            <Link to="*" className="nav__link">
              Design Theory
            </Link>
          </label>
          <label className="nav__item" >
            <Link to="*" className="nav__link">
              UX
            </Link>
          </label>
          <label className="nav__item" >
            <Link to="*" className="nav__link">
              UI
            </Link>
          </label>
          <label className="nav__item" >
            <Link to="*" className="nav__link">
              Typography
            </Link>
          </label>
        </form>
      </div>
      <div className="nav__hamburger" onClick={handleClick}>
        {click ? <img src={close} alt="" /> : <img src={bars} alt="" />}
      </div>
    </>

  );
};

export default Nav;
