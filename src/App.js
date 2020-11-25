import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import Home from './components/Home/Home';
// import Code from './components/Code/Code';
// import Nav from './components/Nav/Nav';
// import Skills from './components/Skills/Skills';
const Home = lazy(() => import('./components/Home/Home'));
const Code = lazy(() => import('./components/Code/Code'));
const Nav = lazy(() => import('./components/Nav/Nav'));
const Skills = lazy(() => import('./components/Skills/Skills'));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Nav />
          <Switch>
            <Route path="/" rel="preconnect" exact component={Home} />
            <Route path="/skills" rel="preconnect" exact component={Skills} />
            <Route path="/code" rel="preconnect" exact component={Code} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
