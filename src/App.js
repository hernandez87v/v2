import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" rel="preconnect" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
