import React from 'react';
import Header from './Components/Header/Header';
import Index from "./Components/Index/Index";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;