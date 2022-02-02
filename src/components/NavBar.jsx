import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import img from '../pages/iconwu.jfif';

const NavBar = () => {
    return (
        <Navbar>
            <Container className={'container'}>
                <div className={'container__red'}>«Rap was better before»</div>
                <img className={'container__icon'} alt={'wu-tang'} src={'../iconwu.jfif'}/>
                <Nav>
                    <Link to='/' className={'container__home'}>Home</Link>
                    <Link to='/score' className={'container__score'}>Score</Link>
                    <Link to='/auth' className={'container__auth'}>Auth</Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
