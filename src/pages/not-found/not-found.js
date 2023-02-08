import Container from "../../components/container/container";
import Head from "../../components/head/head";

import Error from "../../components/error/error";

import "./not-found.scss"
const NotFound = () => {

  return (
    <Container>
      <div className="head">
        <Head/>
      </div>
    <Error/>
    </Container>
  );
}

export default NotFound;