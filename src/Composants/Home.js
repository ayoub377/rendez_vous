import React, {Component} from 'react';
import Navbar1 from "./Navbar";
class Home extends Component {
    render() {
        return (
            <div>
                <Navbar1/>
                <h1 style={{textAlign:'center'}}>Prise de Rendez-vous</h1>

            </div>
        );
    }
}

export default Home;