
import './App.css';
import Home from "./Composants/Home";
import Formpage from "./Composants/Form";
import {BrowserRouter,Router, Route, Switch } from "react-router-dom";
import Signup from "./Composants/sign";


function App() {
  return (
      <div className="App">
<div className="background"> <BrowserRouter>
              <Switch>
              <Route exact path='/'>
                  <Home/>
              </Route>
        <Route path='/login'>
            <Formpage/>
        </Route>
                  <Route path='/signup'>
                  <Signup/>
                  </Route>
              </Switch>
          </BrowserRouter></div>
         
        </div>
  );
}

export default App;
