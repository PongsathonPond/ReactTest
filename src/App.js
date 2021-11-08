
import './App.css';
import Navber  from './compoonents/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './contents/Home'
import About from './contents/About'
import Education from './contents/Education'
import Skills from './contents/Skills'
import Contact from './contents/Contact'


function App() {
  return (
   <Router>

<div className="App">
    
    <Navber/>

    <Route exact path="/">

      <Home />
      
    </Route>



    <Route exact path="/about">

<About />


</Route>



<Route exact path="/education">

<Education />


</Route>



<Route exact path="/skills">

<Skills />


</Route>



<Route exact path="/contact">

<Contact />


</Route>



</div>
   </Router>
  );
}

export default App;
