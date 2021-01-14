import React from 'react';
import { Card, CardTitle, CardText, CardBody, CardSubtitle, Button, CardImg, Container, Col, Row, Body } from 'reactstrap';

const Blog = (props) => {
    return (
        <>
            <div className="pdfbackground">
                <Container>
                    <Row>
                        <Col>
                            <br />
                            <Card className="cardStyle">
                                <CardBody>
                                    <CardTitle tag="h5">1/11/2021</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                            <br />
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">Card title</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                            <br />
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">Card title</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                            <br />
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">Card title</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                            <br />
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">Card title</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                            <br />
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">Card title</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};




export default Blog;