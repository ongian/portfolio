import React, {useState, useRef, useEffect} from 'react';
import {Row, Container, Col, Form, Button, Image} from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        message: ''
    })
    const contactform = useRef();
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
                    [e.target.name]: 'This field is required!'
                }
            })
        } else {
            setError(err => {
                return {
                    ...err,
                    [e.target.name]: ''
                }
            })
        }
    }

    let emailStatus = null;
    const onSubmitHandler = async(e) => {
        console.log(formData)
        e.preventDefault();
        try {
            const send = await emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_NAME, contactform.current, process.env.REACT_APP_PUBLIC_KEY);
            if(send.text === 'OK'){
                setFormData({
                    name: '',
                    subject: '',
                    email: '',
                    message: ''
                })
                setError();
                emailStatus = '<small className="text-success">Message Sent!</small>';
            }
            console.log(send);
        } catch (error) {
            emailStatus = `<small className="text-danger">${error.text}</small>`;
            console.log(error);
            setFormData({
                name: '',
                subject: '',
                email: '',
                message: ''
            })
        }
    }
    console.log(process.env)
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
                        <Form ref={contactform}>
                            {emailStatus}
                            <Form.Group className="mb-2">
                                <Form.Control type="text" 
                                    name="name" 
                                    placeholder="Name" 
                                    onChange={onChangeHandler} 
                                    value={name} 
                                    onBlur={onBlurHandler}/>
                                {error && error.name && <small className="text-danger px-1">{error.name}</small>}
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Control type="text" 
                                    name="subject" 
                                    placeholder="Subject" 
                                    onChange={onChangeHandler} 
                                    value={subject} 
                                    onBlur={onBlurHandler}/>
                                {error && error.subject && <small className="text-danger px-1">{error.subject}</small>}
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <Form.Control type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    onChange={onChangeHandler} 
                                    value={email} 
                                    onBlur={onBlurHandler}/>
                                {error && error.email && <small className="text-danger px-1">{error.email}</small>}
                            </Form.Group>
                            <Form.Group className="mb-1">
                                <textarea 
                                    name="message" 
                                    placeholder="Message" 
                                    onChange={onChangeHandler} 
                                    value={message}
                                    onBlur={onBlurHandler}>
                                </textarea>
                                {error && error.message && <small className="text-danger px-1">{error.message}</small>}
                            </Form.Group>
                            <Form.Group>
                                <Button type="submit" onClick={onSubmitHandler}>Send Message</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
 
export default Contact;