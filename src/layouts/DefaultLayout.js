import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Menu from './Menu';

function DefaultLayout(props) {  
    const styles = { 
        backgroundColor: props.colorBarraMenu, 
        color: props.colorText
    };  
    return (
        <div className='wrap'>
            <Header />
            <Container fluid>
                <Row>
                    <Col id="barra_esquerda" sm={12} md={2} style={styles}>
                        <Menu />
                    </Col>
                    <Col id="conteudo" sm={12} md={10}>
                        {props.children}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DefaultLayout;