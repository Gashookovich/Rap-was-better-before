import React from 'react';
import NavBar from "../components/NavBar";
import {Container, Form, InputGroup} from "react-bootstrap";
import '../myStyle.css';

const Auth = () => {
    return (
        <>
            <NavBar/>
            <Container>
                <h2 className={'container__head'}>Auth/Авторизация</h2>
            </Container>
        </>
    );
};

export default Auth;
