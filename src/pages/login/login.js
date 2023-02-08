import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";

import "./login.scss"

import logo from "../../assets/img/logo.png"
import Container from "../../components/container/container";

const Login = () => {
  const { setToken } = useContext(AuthContext)
  const emailRef = useRef();
  const passwordRef = useRef();
  
  const [ error, setError ] = useState("");
  const [ loading, setLoading ] = useState(false);

  const navigate = useNavigate();


  const handleFormSubmit= (evt) => {
    evt.preventDefault();

    const emailValue = emailRef.current.value;
    const passworValue = passwordRef.current.value;

    if(emailValue && passworValue){
      fetch("https://reqres.in/api/login",{
        method: "POST",
        body: JSON.stringify({
          "email": emailValue,
          "password": passworValue
        }),
        headers: {
          'Content-Type':'application/json'
        },
      })
      
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(data => {
        console.log(data);
        setToken(data.token);
        navigate("/");
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
    }
  }
  
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
    <Container>

    <img src={logo} alt="" className="login-img"/>
    <form onSubmit={handleFormSubmit} className="login-form"> 
      <p className="login__title">Login</p>
      <div className="form__box">
      <input ref={emailRef} aria-label="Email"  name="name"placeholder="email" type="email" className="login__inp"/>
      <input ref={passwordRef} aria-label="Password" name="email" placeholder="password" type="password" className="login__inp"/>
      <button disabled={loading} type="submit" className="login__btn">Submit</button>
      </div>
      <span style={{color: "red"}}>{error}</span>
      <p>Email: eve.holt@reqres.in</p>
      <p>Password: cityslicka</p>

    </form>
    </Container>

    </>
  )
} 
export default Login;