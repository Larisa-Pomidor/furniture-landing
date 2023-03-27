import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import Navbar from 'react-bootstrap/Navbar';

import sprite from '../assets/img/ico-sprite.svg';

const Header = () => (
    <Navbar bg="light" expand="lg" className="w-100 position-fixed">
        <Container>
            <Navbar.Brand>Vivo Furniture</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="gap-5 mx-auto">
                    <Link to="/" >Главная</Link>
                    <Link to="/#about" >О нас</Link>
                    <Link to="/#action" >Акции🔥</Link>
                    <Link to="/#contacts" >Контакты</Link>
                </Nav>
                <Stack className="header__controll ms-5" direction="horizontal" gap={4}>
                    <div className="header__controll-item header__controll-item_account">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <use href={sprite + "#account"} />
                        </svg>
                    </div>
                    <div className="header__controll-item header__controll-item_cart">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <use href={sprite + "#cart"} />
                        </svg>
                        <div className="header__cart-number">
                            0
                        </div>
                    </div>
                    <div className="header__controll-item header__controll-item_favorite">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <use href={sprite + "#heart"} />
                        </svg>
                    </div>
                </Stack>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header;