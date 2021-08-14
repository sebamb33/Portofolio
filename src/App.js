import {BrowserRouter,Switch, Route} from  "react-router-dom";
import Accueil from "./pages/Accueil";
import Competence from "./pages/Competences";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import './App.css';

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
