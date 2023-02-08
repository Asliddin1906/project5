import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import "./error.scss"
import error from "../../assets/img/404.png"

const Error = () => {
  const { token } = useContext(AuthContext)

  return(
    <div className="error" >
    <img src={error} alt="" className="error-img" />
    <p className="error__title">Page not found - 404</p>
    <article>This page not found (deleted or never exists).</article>
    <article className="error__text">Try a phrase in search box or back to home and start again.</article>
    <Link to={"/" + (token ? "" : "login")}> TAKE ME HOME{token ? ">" : ">"}</Link>
    </div>
  )
}


export default Error;