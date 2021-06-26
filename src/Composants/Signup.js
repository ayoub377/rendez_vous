
import {Form,Button} from "react-bootstrap";
import Navbar1 from "./Navbar";
import Firebasecontext from "./Firebase/contexte_firebase";
/*
class Signup extends Component {


   constructor() {
       super();
       this.state={
           email:'',
           password:'',
           telnum:'',
           error:''


           }


       }
    static ContextType=Firebasecontext;




    render()
{
    const firebase=this.context;
console.log(firebase)
    const btn= this.state.email ===''|| this.state.telnum===''|| this.state.password===''?<Button disabled variant="primary" type="submit" >
        Submit
    </Button>:<Button variant="primary" type="submit" >
        Submit
    </Button>

    const handlsubmit=(e)=>{
        e.preventDefault();
        firebase.signupuser(this.state.email,this.state.password)
        .then(user=>{
        this.setState({...this.state.email,...this.state.password,...this.state.telnum})
        })
            .catch(error=>{
            this.setState({error:error})
                this.setState({...this.state.email,...this.state.password,...this.state.telnum})
            })
    }
const errormsg = this.state.error !=='' && <span>{this.state.error.message()}</span>
        return (
            <div>
                <Navbar1/>

                <Form className='container modal-sm' style={{position:'absolute',bottom:'40%',right:'40%'}} onSubmit={handlsubmit}>
                    {errormsg}
                    <h3>Creer un compte</h3>
                    <Form.Group controlId="formBasicEmail" className='col-sm-10'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmailChange} value={this.state.email} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className='col-sm-10'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlepassChange} value={this.state.password}  type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone" className='col-sm-10'>
                        <Form.Label>numero de telephone</Form.Label>
                        <Form.Control onChange={handletelChange} value={this.state.telnum}   type="tel" placeholder="telephone" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    {btn}

                </Form>
            </div>
        );
    }

}

export default Signup;  */