import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Header() {
    return (
        <header>
            <Container fluid>
                <Row>
                    <Col sm={12} md={6}>
                        LogoMarca
                    </Col>
                    <Col sm={12} md={6}>
                        Avatar
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
