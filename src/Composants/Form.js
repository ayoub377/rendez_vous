import React, {Component} from 'react';
import Navbar1 from "./Navbar";
import {Link} from "react-router-dom";

class Formpage extends Component {
    render() {
        return (

            <div>
                <Navbar1/>

                <form className='container modal-sm' style={{position:'absolute',bottom:'40%',right:'40%'}}>
                    <h3>Se connecter</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <Link to='#pass'>password?</Link>
                    </p>
                </form>
            </div>
        );
    }
}

export default Formpage;