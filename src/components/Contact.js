import React,{ useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

const Contact = () => {

    const [user, setUser] = useState({
        name: '',
        mail: '',
        message: ''
    })

    const submit = e => {
        e.preventDefault()
        alert("submitted")
    }

    const handleInputChange = e => {
        setUser({ [e.target.name] : e.target.value })
    }

    return (
        <Row className="mt-3 d-flex justify-content-center" style={{height:useHeight() - 80 }}>
            <Col md={8}>
                <Form onSubmit={submit}>
                    <Row className="mb-2">
                        <Col className="mb-2">
                            <Form.Label>Ad Soyad</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Ad Soyad..." value={user.name} onChange={handleInputChange} required/>
                        </Col>
                        <Col md={12} sm={12}>
                            <Form.Label>Email Adresi</Form.Label>
                            <Form.Control type="email" name="mail" placeholder="name@example.com" value={user.mail} onChange={handleInputChange} required/>
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col>
                            <Form.Label>Mesajınız</Form.Label>
                            <Form.Control as="textarea" name="message" rows="3" value={user.message} onChange={handleInputChange} required/>
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col>
                            <Button type="submit" variant="info" block>Gönder</Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

const useHeight = () => window.innerHeight

export default Contact
