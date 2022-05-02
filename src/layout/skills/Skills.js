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
                    <Col>
                        <FontAwesomeIcon icon={faHtml5} />
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faCss3} />
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faBootstrap} />
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faSass} />
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faJs} />
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faReact} />
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faWordpress} />
                    </Col>
                </Row>
            </Container>
        </section> 
    );
}
 
export default Skills;