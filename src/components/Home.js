import React from 'react';
import { Jumbotron, Button, Row, Col, Container } from 'reactstrap';
// import {Image} from 'react-bootstrap';
import bannerLarge from "../components/images/bannerLarge.png";
import image from "../components/images/headShot.jpg"
const homePage = (props) => {

  return (
    <>
      <div style={{ backgroundColor: "#1B3342" }}>
        <Container>
          <Row fluid style={{ backgroundColor: "#1B3342", justifyContent: "center", width: "auto" }}>
            <img class="img-fluid" src={bannerLarge} alt="banner" />
          </Row>
        </Container>
        <Jumbotron className="ml-4 mr-5 text-center" style={{ justifyContent: "center", width: "auto" }}>
          <h1 className="display-3 text-center">Hello, world!</h1>
          <img src={image} className="img-fluid" style={{ width: 500, height: 350, borderRadius: 400 / 2 }}
            alt="JdaviesHeadshot.jpg" />
            <hr />
          <p className="display-4 text-center" >Welcome to my blog</p>
        </Jumbotron>
        <br />
        <Jumbotron className="ml-4 mr-5" style={{ justifyContent: "center", width: "auto" }}>
          <p className="lead ">
          In this bloog I have recored my time throught my boot camp to learn code, and will continue to keep track of my code learned progesss. 
          In addition the keeping track of it through wrtiing I will update the look o fthis blog over time </p>
          <hr className="my-2" />
          {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
          <p className="lead"></p>
        </Jumbotron>
        <br />
      </div>
    </>
  );
};



export default homePage;