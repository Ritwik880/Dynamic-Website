import './App.css';
import { Route } from 'react-router-dom';
import UseState from './components/useState';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <>
    <Route exact path="/">

    <Signup />
    </Route>
    <Route path="/Home">
        <Home />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/useState">
        <UseState />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Signup">
        <Signup />
      </Route>
      
      
    </>
  );
}

export default App;
