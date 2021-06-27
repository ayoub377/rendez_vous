import React,{useState, useContext} from 'react';
import {Link } from "react-router-dom";
import Navbar1 from "./Navbar";
import Firebasecontext from "./Firebase/contexte_firebase";
import "./styles_css/form_per.css"

const Login =(props)=>{

    console.log(props)
const [email,setemail]=useState('');
const [password,setpassword]=useState('');

const firebase= useContext(Firebasecontext);

    const [error,seterror]=useState('')

const handleSubmit=e=>{
    e.preventDefault();
    firebase.loginuser(email,password)
        .then(user=>{
            setemail('')
            setpassword('')
          props.history.push('/calendrier')
        })
        .catch(error=>{
            seterror(error)
        })
}

  return(
      <div>
          <Navbar1/>

          <form onSubmit={handleSubmit}
          className="form_per">
          
              {error!=='' && <span className="erreur_msg">{error.message}</span>}
              <h3 className="head_per">Se connecter</h3>


        {/* form_1 */}

              <div className="form-group" className='grp_per'>
                 <div className="form_2">
                     <div className="left_side_per_2"> 
                          <h5>Email</h5>
                     </div>

                     <div className="right_side_per_2">
                         <input onChange={e=>{setemail(e.target.value)}} type="email" className="form-control" placeholder="Enter email" value={email} className="bar_per"/>
                    </div>
                 </div>
              </div>


        {/* form_2 */}

        <div className="form-group" className='grp_per'>
             <div className="form_2">
                 <div className="left_side_per_2"> 
                  <h5>Password</h5>
                </div>

                <div className="right_side_per_2">
                  <input onChange={e=>{setpassword(e.target.value)}} type="password" className="form-control" placeholder="Enter password" value={password} className="bar_per" />
                </div>
            </div>
        </div>


        {/* form_3 */}

        <div className="form-group" className='grp_per'>
        <div className="form_2">
            <div className="left_side_per_2">

                  <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="customCheck1" className="chek_in"/>
                      <label className="custom-control-label" htmlFor="customCheck1" className="chek_in"> Remember me</label>
                  </div>
            </div>
        
            <div className="right_side_per_2">
                 <div className="bouton_pos">
              <button type="submit" className="bout">Submit</button>
            
            </div></div>
             </div> 

             <div className="right_side_per_2">
              <p className="forgot-password text-right">
                  Forgot <Link to='#pass' className="p_pass">password?</Link>
              </p>
            </div>

            </div>
          </form>
      </div>
  )

}

export default Login;