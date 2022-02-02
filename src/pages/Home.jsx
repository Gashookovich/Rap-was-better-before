import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import ProductList from "../components/ProductList";
import NavBar from "../components/NavBar";
import image from '../pages/allstars.jpg';
import '../myStyle.css';
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <NavBar/>
            <Container>
                <div>
                    <img className={'container__image'} src={image} alt={'allstars'}/>
                    <h2 className={'container__head'}>Rap was better before - это международная платформа
                        для всех любителей  музыкальной хип-хоп группы Wu-Tang Clan. Здесь
                        можно  приобрести или, наоборот, выложить на продажу товар с тематикой Wu-Tang,
                        а также найти интересных собеседников на любые темы о группе. Peace!</h2>
                </div>
                <Row>
                    <Col md={3}>
                        <TypeBar/>
                    </Col>
                    <Col md={9}>
                        <ProductList/>
                        <Footer/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;