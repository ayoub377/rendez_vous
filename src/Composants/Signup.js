import React, {Component} from 'react';
import {Form,Button} from "react-bootstrap";
import Navbar1 from "./Navbar";

class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar1/>

                <Form className='container modal-sm' style={{position:'absolute',bottom:'40%',right:'40%'}}>
                    <h3>Creer un compte</h3>
                    <Form.Group controlId="formBasicEmail" className='col-sm-10'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className='col-sm-10'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Signup;