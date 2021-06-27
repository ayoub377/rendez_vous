import React, {useState, useContext} from "react";
import Navbar1 from "./Navbar";
import {Form,Button} from "react-bootstrap";
import Firebasecontext from "./Firebase/contexte_firebase";

import "./styles_css/form_per.css"



const Signup= ()=>{

    const firebase = useContext(Firebasecontext)

    const data={
        formBasicEmail:'',
        formBasicPassword:'',
        formBasicPhone:''

    }
    const [loginData,setloginData]=useState(data)
    const [error, seterror]=useState('')
const handleChange=e=>{
setloginData({...loginData,[e.target.id]:e.target.value})

}
const handleSubmit=e=>{
        e.preventDefault();
    const { formBasicEmail,formBasicPassword }=loginData
        firebase.signupuser(formBasicEmail,formBasicPassword)
            .then(user=>{
              setloginData({ ...data})
            })
            .catch(error=>{
             seterror(error);
             setloginData({ ...data})
            })

}
    const { formBasicEmail,formBasicPassword,formBasicPhone }=loginData
const btn = formBasicEmail==='' || formBasicPassword==='' || formBasicPhone=== ''? 
<Button disabled variant='primary' type='submit'>creer compte</Button>: <Button variant='primary' type='submit' className="bout">creer compte</Button>
 const msgerr= error !=='' && <span className="erreur_msg">{error.message}</span>;






return(
    <div>
        <Navbar1/>

        <Form onSubmit={handleSubmit} 
        className="form_per">
            {msgerr}

            <h3 className="head_per">Creer un compte</h3>

        {/* form_1 */}

            <Form.Group controlId="formBasicEmail" className='grp_per'>
            <div className="form_2"> 

                 <div className="left_side_per_2">
                <h5>Email</h5>
                </div>

                <div className="right_side_per_2">
                <Form.Control onChange={handleChange} value={formBasicEmail} type="email" placeholder="Enter email" className="bar_per" />
                </div>
            </div>
            </Form.Group>

        {/* form_2 */}

            <Form.Group controlId="formBasicPassword" className='grp_per'>
            <div className="form_2"> 
            <div className="left_side_per_2">
                <h5>Password</h5>
            </div>
            <div className="right_side_per_2">
                <Form.Control onChange={handleChange} value={formBasicPassword}  type="password" placeholder="Password" className="bar_per" />
            </div>
            </div>
            </Form.Group>

        {/* form_3 */}

            <Form.Group controlId="formBasicPhone" className='grp_per'>
             
            <div className="form_2"> 
            <div className="left_side_per_2"> 
            <h5>Phone</h5>
            </div>
            <div className="right_side_per_2">
                <Form.Control onChange={handleChange} value={formBasicPhone}   type="tel" placeholder="telephone" className="bar_per" />
            </div>
            </div>
            </Form.Group>



        {/* form_4 */}
        <div className="form_2">
        <div className="left_side_per_2">
                 <Form.Group controlId="formBasicCheckbox">
            

                     <Form.Check type="checkbox" label="Check me out" className="chek_in" />

                    
                 </Form.Group>
                 
                 </div> 
                 <div className="right_side_per_2">
                 <div className="bouton_pos">
                {btn}</div></div>
        </div>
        </Form>
       
    </div>
)


}

export default Signup;