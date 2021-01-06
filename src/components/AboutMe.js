import React from 'react';
import { Card, CardTitle, CardText, CardBody, CardSubtitle, Button, CardImg } from 'reactstrap';

const aboutMe = (props) => {
  return (
    <div>
      <div>
        <Card>
          {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
          <CardBody>
            <CardTitle tag="h5">About Me</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default aboutMe;