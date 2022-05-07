import React, {useState, useEffect} from 'react';
import {Row, Container, Col, Form, Button, Image} from 'react-bootstrap';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        message: ''
    })
    const [error, setError] = useState();

    const {name, subject, email, message} = formData;
    const onChangeHandler = (e) => {
        setFormData(data => {
            return {
                ...data,
                [e.target.name]: e.target.value
            }
        })
    }
    const onBlurHandler = (e) => {
        if(e.target.value.trim() === ''){
            setError(err => {
                return {
                    ...err,
                    [e.target.name]: 'this field is required!'
                }
            })
        }
    }

    return (
        <section id="contact">
            <Container>
                <Row>
                    <Col>
                        <h2 className="text-center">
                            Contact Me
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={12} className="mb-2">
                        <p>Looking for someone to help on your project or to hire? Send me a message!</p>
                        <Image fluid src="./img/contact.png" alt="Contact Me" />
                    </Col>
                    <Col md={6} xs={12} className="mb-2">
                        <Form>
                            <Form.Group className="mb-2">
                                <Form.Control type="text" 
                                    name="name" 
                                    placeholder="Name" 
                                    onChange={onChangeHandler} 
                                    value={name} 
                                    onBlur={onBlurHandler}/>
                                    {error && error.name && <small className="danger">{error.name}</small>}
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Control type="text" 
                                    name="subject" 
                                    placeholder="Subject" 
                                    onChange={onChangeHandler} 
                                    value={subject} 
                                    onBlur={onBlurHandler}/>
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Control type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    onChange={onChangeHandler} 
                                    value={email} 
                                    onBlur={onBlurHandler}/>
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <textarea 
                                    name="message" 
                                    placeholder="Message" 
                                    onChange={onChangeHandler} 
                                    value={message}>

                                </textarea>
                            </Form.Group>
                            <Form.Group>
                                <Button type="submit">Send Message</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
 
export default Contact;