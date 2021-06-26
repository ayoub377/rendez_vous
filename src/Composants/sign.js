import React, {useState, useContext} from "react";
import Navbar1 from "./Navbar";
import {Form,Button} from "react-bootstrap";
import Firebasecontext from "./Firebase/contexte_firebase";
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
const btn = formBasicEmail==='' || formBasicPassword==='' || formBasicPhone=== ''? <Button disabled variant='primary' type='submit'>
    creer compte
</Button>: <Button variant='primary' type='submit'>
    creer compte
</Button>
 const msgerr= error !=='' && <span>{error.message}</span>;
return(
    <div>
        <Navbar1/>

        <Form onSubmit={handleSubmit} className='container modal-sm' style={{position:'absolute',bottom:'40%',right:'40%'}} >
            {msgerr}
            <h3>Creer un compte</h3>
            <Form.Group controlId="formBasicEmail" className='col-sm-10'>
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={handleChange} value={formBasicEmail} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className='col-sm-10'>
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={handleChange} value={formBasicPassword}  type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicPhone" className='col-sm-10'>
                <Form.Label>numero de telephone</Form.Label>
                <Form.Control onChange={handleChange} value={formBasicPhone}   type="tel" placeholder="telephone" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            {btn}

        </Form>
    </div>
)


}

export default Signup;