import React, {Component} from 'react';
import {Navbar,Nav} from "react-bootstrap";

class Navbar1 extends Component {
    render() {
        return (
            <div className='nav'>
                <Navbar bg="blue" expand="lg">
                    <Navbar.Brand href="/">RV</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/login">Se connecter</Nav.Link>
                            <Nav.Link href="/signup">Creer un Compte</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navbar1;