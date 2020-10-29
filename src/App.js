import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Code from './components/Code/Code';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" rel="preconnect" exact component={Home} />
          <Route path="/skills" rel="preconnect" exact component={Skills} />
          <Route path="/code" rel="preconnect" exact component={Code} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
