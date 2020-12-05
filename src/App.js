import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
const Home = lazy(() => import('./components/Home/Home'));
const Code = lazy(() => import('./components/Code/Code'));
const Nav = lazy(() => import('./components/Nav/Nav'));
const Skills = lazy(() => import('./components/Skills/Skills'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" rel="preconnect" exact component={Home} />
            <Route path="/skills" rel="preconnect" exact component={Skills} />
            <Route path="/code" rel="preconnect" exact component={Code} />
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
