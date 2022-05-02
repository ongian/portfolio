import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

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
            </Container>
        </section>
    );
}
 
export default Masthead;