import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import NavBar from "../components/NavBar";
import TypeBar from "../components/TypeBar";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import '../myStyle.css';
import Footer from "../components/Footer";

const ProductPage = () => {
    const params = useParams()
    const id = params.id - 1
    const product = useSelector(state => state.cards[id])
    return (
        <>
            <NavBar/>
            <Container>
                <Row>
                    <Col md={3}>
                        <TypeBar/>
                    </Col>
                    <Col md={9}>
                        <Row className='mt-4'>
                            <Col md={6}>
                                <Card className={'container__card-page'}>
                                    <Card.Img height={300} variant='top' src={product.img}></Card.Img>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <h1 className={'container__title'}>{product.title}</h1>
                                <div className={'container__desc'}>{product.desc}</div>
                            </Col>
                        </Row>
                    </Col>
                    <Footer/>
                </Row>
            </Container>

        </>

    );
};

export default ProductPage;
