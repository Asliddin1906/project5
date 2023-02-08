import Nav from "../nav/nav";
import Container from "../container/container";
import Logo from "../logo/logo";

const Head = () => {
  return(
    <Container>

    <div className="head">
      <Logo className="logo"/>
      <Nav className="nav"/>
    </div>
    </Container>
  )
};

export default Head;