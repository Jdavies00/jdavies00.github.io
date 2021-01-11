import React from 'react';
import { Jumbotron, Button, Row, Col, Container } from 'reactstrap';
import {Image} from 'react-bootstrap';
import bannerLarge from "../components/images/bannerLarge.png";


const homePage = (props) => {



  return (
    <>
      <div style={{ backgroundColor: "#1B3342" }}>
        <Container >
          <Row style={{ backgroundColor: "#1B3342", justifyContent: "center" }}>
            <img src={bannerLarge} alt="banner" />
            <Jumbotron>

              <h1 className="display-3">Hello, world!</h1>
              {/* maybe add self picture here */}
              <Col xs={6} md={4}>
                <Image src="holder.js/171x180" roundedCircle />
              </Col>
              <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-2" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p className="lead">
                <Button color="primary">Learn More</Button>
              </p>
            </Jumbotron>
            <br />
            <Jumbotron>
              <h1 className="display-3">Hello, world!</h1>
              {/* maybe add self picture here */}
              <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-2" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p className="lead">
                <Button color="primary">Learn More</Button>
              </p>
            </Jumbotron>
          </Row>
        </Container>
      </div>
    </>
  );
};




export default homePage;