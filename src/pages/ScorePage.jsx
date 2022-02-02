import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import NavBar from "../components/NavBar";
import TypeBar from "../components/TypeBar";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import '../myStyle.css';


const ScorePage = () => {
    const params = useParams()
    const id = params.id - 1
    const score = useSelector(state => state.clothes[id])
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
                                    <Card.Img height={300} variant='top' src={score.img}></Card.Img>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <div>{score.price}&#8381;</div>
                                <h1 className={'container__title'}>{score.title}</h1>
                                <div className={'container__desc'}>{score.desc}</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>

    );
};

export default ScorePage;