import logo from './logo.svg';
import './index.scss';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Home from './pages/home';
import Trade from './pages/trade';
import Header from './pages/header';
import Chart from './pages/multiChart';
import about from './pages/about';
import Tools from './pages/tools';






function App() {
  return (
    <Router>
        <div>
        <Header />  
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/multi" exact component={Chart} />
          <Route path="/trade" exact component={Trade} />
          <Route path="/about" exact component={about} />
          <Route path="/tool" exact component={Tools} />
        </Switch>
        </div>
    </Router>
    
  );
}

export default App;
