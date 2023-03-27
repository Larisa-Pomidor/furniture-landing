import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import Navbar from 'react-bootstrap/Navbar';

import sprite from '../assets/img/ico-sprite.svg';

const Header = () => (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand>#PhotoShot</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto gap-5">
                    <Link to="/" className={({ isActive }) => (isActive ? "link-active" : "")}>Головна</Link>
                    <Link to="/#about" className={({ isActive }) => (isActive ? "link-active" : "")}>О нас</Link>
                    <Link to="/#action" className={({ isActive }) => (isActive ? "link-active" : "")}>Акции</Link>
                    <Link to="/#contacts" className={({ isActive }) => (isActive ? "link-active" : "")}>Контакты</Link>
                </Nav>
                <Stack className="header__controll" direction="horizontal" gap={2}>
                    <div className="header__controll-item header__controll-item_account">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <use href={sprite + "#account"} />
                        </svg>
                    </div>
                    <div className="header__controll-item header__controll-item_cart">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <use href={sprite + "#cart"} />
                        </svg>
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