import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faCss3, faBootstrap, faJs, faSass, faHtml5, faWordpress } from '@fortawesome/free-brands-svg-icons';
const Skills = () => {
    return ( 
        <section id="skills">
            <Container>
                <Row>
                    <Col>
                        <h2 className="text-center">Skills</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="html">
                        <FontAwesomeIcon icon={faHtml5} />
                        <small>HTML5</small>
                    </Col>
                    <Col className="css">
                        <FontAwesomeIcon icon={faCss3} />
                        <small>CSS3</small>
                    </Col>
                    <Col className="bootstrap">
                        <FontAwesomeIcon icon={faBootstrap} />
                        <small>Bootstrap</small>
                    </Col>
                    <Col className="sass">
                        <FontAwesomeIcon icon={faSass} />
                        <small>SASS</small>
                    </Col>
                    <Col className="javascript">
                        <FontAwesomeIcon icon={faJs} />
                        <small>Javascript</small>
                    </Col>
                    <Col className="reactjs">
                        <FontAwesomeIcon icon={faReact} />
                        <small>ReactJS</small>
                    </Col>
                    <Col className="wordpress">
                        <FontAwesomeIcon icon={faWordpress} />
                        <small>Wordpress</small>
                    </Col>
                </Row>
            </Container>
        </section> 
    );
}
 
export default Skills;