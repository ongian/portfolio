import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { projects } from '../../projects';
import Cards from '../cards/Cards';
const Projects = () => {
    console.log(projects)
    return (
        <section id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2 className="text-center">
                            Projects
                        </h2>
                    </Col>
                </Row>
                <Row>
                    {projects.map(p => <Col xs={12} md={6} lg={4} key={p.title} className="mt-3"><Cards techs={p.techs} title={p.title} img={p.image} link={p.link} desc={p.description} /> </Col>)}
                </Row>
            </Container>
        </section>
    );
}
 
export default Projects;