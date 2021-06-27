import React,{useState, useContext} from 'react';
import {Link } from "react-router-dom";
import Navbar1 from "./Navbar";
import Firebasecontext from "./Firebase/contexte_firebase";


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

          <form onSubmit={handleSubmit} className='container modal-sm' style={{position:'absolute',bottom:'40%',right:'40%'}}>
              {error!=='' && <span>{error.message}</span>}
              <h3>Se connecter</h3>

              <div className="form-group">
                  <label>Email address</label>
                  <input onChange={e=>{setemail(e.target.value)}} type="email" className="form-control" placeholder="Enter email" value={email}/>
              </div>

              <div className="form-group">
                  <label>Password</label>
                  <input onChange={e=>{setpassword(e.target.value)}} type="password" className="form-control" placeholder="Enter password" value={password} />
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
  )

}

export default Login;