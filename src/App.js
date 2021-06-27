
import './App.css';
import Home from "./Composants/Home";
import Formpage from "./Composants/Form";
import {BrowserRouter,Router, Route, Switch } from "react-router-dom";
import Signup from "./Composants/sign";
import Login from "./Composants/Login";
import Calendar from "./Composants/main";

function App() {
  return (
      <div className="App">

          <BrowserRouter>
              <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/login' component={Login}/>
                  <Route path='/signup' component={Signup}/>
                  <Route path='/calendrier' component={Calendar}/>

              </Switch>
          </BrowserRouter>
        </div>
  );
}

export default App;
