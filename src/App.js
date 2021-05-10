import Homepage from './Homepage'
import './App.scss'
import Navbar from './Navbar'
import { Switch, Route } from 'react-router-dom'
import About from './About';
function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Navbar></Navbar>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Homepage></Homepage>
            </Route>
            <Route path="/about" exact >
              <About></About>
            </Route>

          </Switch>
        </div>
      </div>



    </div>

  );
}

export default App;
