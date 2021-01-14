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
                                    <CardTitle tag="h5">Januaray 11th, 2021</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>

                                    </CardText>
                                </CardBody>
                            </Card>
                            <br />
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">October 18th, 2020</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Week Five</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                            <br />
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">October 11th, 2020</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Week Four</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                            <br />
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">October 4th ,2020</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Week Three</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                            <br />
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">September 28th, 2020</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Week Two</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                            <br />
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">September 21st, 2020</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Week One</CardSubtitle>
                                    <CardText>
                                        <ol>
                                            <li>
                                                <st>Was your first week what you expected? Why? Why not? </st>
                                                <br />
                                                - The first week was harder than I expected, lots of new tools to familiarize myslef with, but definatly a great learning experience.</li>
                                            <li>
                                                <st>What are you struggling with? </st>
                                                <br />
                                                - I never thought having too many tools would be a problem, but I am excited to learn how to use them and what I can accomplish with them.</li>
                                            <li>
                                                <st>What are you excited or eager to learn more about?</st>
                                                <br />
                                                - Right now I dont know how much I dont know and am excited to to find out how much there is to know about web dev. </li>
                                        </ol>
                                    </CardText>
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