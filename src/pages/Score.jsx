import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import ScoreList from "../components/ScoreList";
import NavBar from "../components/NavBar";
import '../myStyle.css';
import Footer from "../components/Footer";

const Score = () => {
    return (
        <>
            <NavBar/>
            <Container>
                <div>
                    <h2 className={'container__head'}>Магазин тематических товаров</h2>
                </div>
                <Row>
                    <Col md={3}>
                        <TypeBar/>
                    </Col>
                    <Col md={9}>
                        <ScoreList/>
                    </Col>
                    <Footer/>
                </Row>
            </Container>
        </>
    );
};

export default Score;