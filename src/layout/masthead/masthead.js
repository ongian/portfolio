import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Masthead = () => {
    return (
        <section className="masthead">
            <Container>
                <Row>
                    <Col>
                    <h1 className="text-center">
                        Front End Web Developer
                    </h1>
                    <p className="text-center">
                        I fix and build websites and I love what I'm doing
                    </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image className="m-auto d-block" fluid src="./img/developer-icon.png" alt="Developer" />
                    </Col>
                </Row>
                <Row className="align-items-center mt-5">
                    <Col xs={12} md={6} className="text-center">
                        <small>Download my resume</small>
                        <div className="d-block mt-3">
                            <Button href="./img/Christian_Ong.pdf" download className="resume">Download</Button>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="text-center">
                        <small>Connect with me</small>
                        <div className="d-flex align-items-center justify-content-center contact mt-2">
                            <a href="https://github.com/ongian" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithubSquare} />
                            </a>
                            <a href="https://www.linkedin.com/in/web-dev-christian-ong" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="mailto:ongchristian117@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
 
export default Masthead;