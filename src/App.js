import {BrowserRouter,Switch, Route} from  "react-router-dom";
import Accueil from "./pages/Accueil";
import Competence from "./pages/Competences";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { library } from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { useSpring, animated } from 'react-spring';
import './App.css';
library.add(fab,fas); // Icon for website
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component= {Accueil}/>
      <Route path="/competences" exact component= {Competence}/>
      <Route path="/contact" exact component = {Contact}/>
      <Route component ={NotFound}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
