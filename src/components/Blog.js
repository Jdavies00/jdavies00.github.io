import React from 'react';
import { Card, CardTitle, CardText, CardBody, CardSubtitle, Container, Col, Row } from 'reactstrap';

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
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Post Boot Camp week 4</CardSubtitle>
                                    <CardText>
                                        After the boot camp I've started spending my time reviewing the material from the couse and have started learning Node.js, and am concidering .Net after that.
                                    </CardText>
                                </CardBody>
                            </Card>
                            <br />
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">October 18th, 2020</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Week Five</CardSubtitle>
                                    <CardText>
                                        <ol>
                                            <li>What is the number one thing that held you back this week? Why?
                                                <br />- Not asking enough questions, once I get my head down and start working it's hard for me to admitt thing would go a lot smoother if I asked for help on something
                                            </li>
                                            <li>What is one thing you would like to learn more about regarding JavaScript (JSON, Data Structures)?
                                            <br />-I'd like tolearn more about how to code my own JSON file to laod into HTML
                                            </li>
                                            <li>What is one thing you would like to learn more about regarding Bootstrap or Atomic Design?
                                            <br />- I really enjoyed bootstrap, and leaning about all the things it can do but I feel like I dont have enough context for it, mainly what are the limitations of boootsrap.
                                            </li>
                                        </ol>
            </CardText>
                                </CardBody>
                            </Card>
                                <br />
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">October 11th, 2020</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Week Four</CardSubtitle>
                                        <CardText>
                                            <ol>
                                                <li>What was one thing you liked and disliked about each of the new topics covered in Pre Work?
                                            <br />-I really enjoy the fast pace of everyting as well as how I was given an amount of work and a dead line to complete it,  I like how it was up to me to manage my own time finish the work
                                        </li>
                                                <li>What was helpful?
                                            <br />-Slakc was life
                                        </li>
                                                <li>What hindered your progress?
                                            <br />-I would research problems I would have in my code and would find realy high level solutions that left me more confused than when I started.
                                        </li>
                                                <li>How did you overcome challenges?
                                            <br />-I listened to Justin and Ian about how to evaluate if information about a topic is going to be helpful to me or if its just someone else showing off trying to hit a hole in one.
                                        </li>
                                            </ol>
                                        </CardText>
                                    </CardBody>
                                </Card>
                                <br />
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">October 4th ,2020</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Week Three</CardSubtitle>
                                        <CardText> <ol>
                                            <li>What are your thoughts about the roles HTML, CSS, and JavaScript play in the process of rendering content and providing user experience?
                                            <br /> -HTML, CSS, and Javascript are all different layers that serve different, vital funtions. Html lays the ground work, that css can manipulate and give style to, and Javascript can can control all of it and add higher level funtions.
                                        </li>
                                            <li>What are some objects that your blog incorporates?
                                            <br />-Right now I dont have any objects in my Blog.
                                        </li>
                                        </ol>
                                        </CardText>
                                    </CardBody>
                                </Card>
                                <br />
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">September 28th, 2020</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Week Two</CardSubtitle>
                                        <CardText>
                                            <ol>
                                                <li>What are your thoughts on pseudo coding?
                                                <br /> -I really ennjoy having a road map for the projects I'm working on to refer to when I get bogged down with what I'm working on.
                                            </li>
                                                <li>What are you struggling with?
                                                <br /> - What I'm struggleing with the most is all the different ways I can approach pseudocoding and how much detail I can put into it with the time constraints I have.
                                            </li>
                                                <li>What are you excited or eager to learn more about?
                                                <br /> -I'm most eager to learn how to use pseudocode to refocus my efforts on a project so I dont spend too much time working on an aspect that is less vital than another
                                            </li>
                                            </ol>
                                        </CardText>
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