import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function EmployeeCard({ image, name, title, email, phone }) {

    return (
        <Container className="border rounded m-2" style={{backgroundColor: "#fff"}}>
            <Row className="align-items-center text-center">
                <Col>
                    <Image src={image} roundedCircle style={{paddingBottom: "10px", paddingTop: "10px"}} />
                </Col>
                <Col>
                    <span style={{fontWeight: "bold"}}>
                        {name}
                    </span>
                </Col>
                <Col>
                    <span>
                        {title}
                    </span>
                </Col>
                <Col>
                    <span style={{color: "#4273d4"}}>
                        {email}
                    </span>
                </Col>
                <Col>
                    <span>
                        {phone}
                    </span>
                </Col>
            </Row>
        </Container>
    );
}

export default EmployeeCard;