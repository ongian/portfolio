import React, { useState, useRef } from "react";
import {
    Row,
    Container,
    Col,
    Form,
    Button,
    Image,
    Toast,
    FloatingLabel
} from "react-bootstrap";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        email: "",
        message: "",
    });
    const [success, setSuccess] = useState(false);
    const contactform = useRef();
    const [error, setError] = useState();
    const { name, subject, email, message } = formData;
    const disableSubmit = !name || !subject || !email || !message;
    const onChangeHandler = (e) => {
        setFormData((data) => {
            return {
                ...data,
                [e.target.name]: e.target.value,
            };
        });
    };
    const onBlurHandler = (e) => {
        if (e.target.value.trim() === "") {
            setError((err) => {
                return {
                    ...err,
                    [e.target.name]: "This field is required!",
                };
            });
        } else {
            setError((err) => {
                return {
                    ...err,
                    [e.target.name]: "",
                };
            });
        }
    };

    let emailStatus = null;
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const send = await emailjs.sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_NAME,
                contactform.current,
                process.env.REACT_APP_PUBLIC_KEY,
            );
            if (send.text === "OK") {
                setSuccess(true);
                setFormData({
                    name: "",
                    subject: "",
                    email: "",
                    message: "",
                });
                setError();
                emailStatus = '<small className="text-success">Message Sent!</small>';
                setTimeout(() => {
                    setSuccess(false);
                }, 3000);
            }
        } catch (error) {
            emailStatus = `<small className="text-danger">${error.text}</small>`;
            setSuccess(false);
            console.log(error);
            setFormData({
                name: "",
                subject: "",
                email: "",
                message: "",
            });
        }
    };
    return (
        <section id="contact">
            <Container>
                <Row>
                    <Col>
                        <h2 className="text-center">Contact Me</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={12} className="mb-2">
                        <p>
                            Looking for someone to help on your project or to hire? Send me a
                            message!
                        </p>
                        <Image fluid src="./img/contact.png" alt="Contact Me" />
                    </Col>
                    <Col md={6} xs={12} className="mb-2">
                        <Toast
                            bg="dark"
                            className="col-12 mb-2 p-2"
                            show={true}
                            delay={3000}
                            autohide
                        >
                            <p>
                                Hi, thank you for your inquiry, I'll reply ASAP once I read your
                                message. Have a nice day :)
                            </p>
                        </Toast>
                        <Form ref={contactform}>
                            {emailStatus}
                                <FloatingLabel
                                    label="Name"
                                    className="mb-2"
                                >
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        onChange={onChangeHandler}
                                        value={name}
                                        onBlur={onBlurHandler}
                                    />
                                </FloatingLabel>
                                {error && error.name && (
                                    <small className="text-danger px-1">{error.name}</small>
                                )}
                            <FloatingLabel 
                                label="Subject"
                                className="mb-2"
                            >
                                <Form.Control
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    onChange={onChangeHandler}
                                    value={subject}
                                    onBlur={onBlurHandler}
                                />
                                {error && error.subject && (
                                    <small className="text-danger px-1">{error.subject}</small>
                                )}
                            </FloatingLabel>
                            <FloatingLabel 
                                label="Email"
                                className="mb-2"
                            >
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={onChangeHandler}
                                    value={email}
                                    onBlur={onBlurHandler}
                                />
                                {error && error.email && (
                                    <small className="text-danger px-1">{error.email}</small>
                                )}
                            </FloatingLabel>
                            <FloatingLabel 
                                label="Message" 
                                className="mb-2"
                            >
                                <Form.Control
                                    as="textarea"
                                    name="message"
                                    placeholder="Message"
                                    onChange={onChangeHandler}
                                    value={message}
                                    onBlur={onBlurHandler}
                                />
                                {error && error.message && (
                                    <small className="text-danger px-1">{error.message}</small>
                                )}
                            </FloatingLabel>
                            <FloatingLabel>
                                <Button
                                    type="submit"
                                    onClick={onSubmitHandler}
                                    disabled={disableSubmit}
                                >
                                    Send Message
                                </Button>
                            </FloatingLabel>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
