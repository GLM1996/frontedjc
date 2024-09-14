// components/Navbar.js
'use client'

import Link from 'next/link';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useState } from 'react';
import styles from '../app/styles/Navbar.module.css'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Image from 'next/image';


const NavbarComponent = () => {
    const [expanded, setExpanded] = useState(false);
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const url = `${pathname}?${searchParams}`
        // You can now use the current URL
        // ...
    }, [pathname, searchParams])

    // Función para verificar si la ruta actual es la misma que el enlace
    const isActive = (path) => pathname === path ? `${styles.active}` : '';


    return (
        <Navbar expanded={expanded} expand="lg" bg="secondary" variant="secondary" >
            <Container>
                <Navbar.Brand as={Link} href="/">
                    <Image
                        src="/img/leones.png"
                        alt="Logo"
                        width={100}
                        height={60}
                    // Puedes ajustar el tamaño del logo según tus necesidades
                    />
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={() => setExpanded(!expanded)}
                />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} href="/" className={`${styles.colorMenu} ${isActive('/')}`}>Home</Nav.Link>
                        <Nav.Link as={Link} href="/about" className={`${styles.colorMenu} ${isActive('/about')}`}>About</Nav.Link>
                        <Nav.Link as={Link} href="/contact" className={`${styles.colorMenu} ${isActive('/contact')}`}>Contact</Nav.Link>
                    </Nav>

                    <div className="d-flex">
                        <Button variant="outline-light" className="me-2">Login</Button>
                        <Button variant="light">Register</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
