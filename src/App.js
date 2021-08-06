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
import multiChart from './pages/multiChart';
import about from './pages/about';
import tools from './pages/tools';






function App() {
  return (
    <Router>
        <div>
        <Header />  
        <Switch>
          
          <Route path="/">
          <Trade />
          </Route>

          <Route path="/trade">
            <Trade />
          </Route>

          <Route path="/multichart">
            <multiChart />
          </Route>

          <Route path="/about">
            <about />
          </Route>

          <Route path="/tool">
            <tools />
          </Route>

        </Switch>
        </div>
    </Router>
    
  );
}

export default App;
