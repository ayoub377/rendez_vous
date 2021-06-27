import React, {Component} from 'react';
import  "./styles_css/nav_per.css"

class Navbar1 extends Component {
    render() {
        return (<div>
        <div className="navbar_per">

            <div className="left_side_per">


               
                              <div className="logo" expand="lg"> 
                                
                                  
                    <a className="logo" href="/">  HOME   </a>

                    </div>      

                <div className="right_side_per">
 {/* 
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">


*/}
                        <div className="leftside"> 
                            <a href="/login" className="text_per">Se connecter</a>
                            <a href="/signup" className="text_per">Creer un Compte</a>
                            </div>
                      {/*    </Nav>

                    </Navbar.Collapse>
                    
                    */}
                </div>

                </div>
            
                      
            </div>
            <div className="fondu"></div>  

                   
                </div>
                    

        );
    }
}

export default Navbar1;