
import './App.css';
import Home from "./Composants/Home";
import Formpage from "./Composants/Form";
import {BrowserRouter,Router, Route, Switch } from "react-router-dom";


function App() {
  return (
      <div className="App">

          <BrowserRouter>
              <Switch>
              <Route exact path='/'>
                  <Home/>
              </Route>
        <Route path='/login'>
            <Formpage/>
        </Route>
              </Switch>
          </BrowserRouter>
        </div>
  );
}

export default App;
