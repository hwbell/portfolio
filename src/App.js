import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// routing
import Router from 'react-router-dom/BrowserRouter';
import { AnimatedSwitch } from 'react-router-transition';
import Route from 'react-router-dom/Route';
import { Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';

// components
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import PortfolioPage from './components/pages/PortfolioPage';
import ContactPage from './components/pages/ContactPage';
import ResumePage from './components/pages/ResumePage';
import Navigator from './components/elements/Navigator';

const RoutesContainer = posed.div({
  enter: {
    opacity: 1,
    // delay: 300,
    beforeChildren: true
  },
  exit: { opacity: 0 }
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    };

  }

  render() {
    return (
      <Router>
        <div>

          <Route render={({ location }) => (
            // pose is kind of awesome! and super easy for a simple 
            // implementation like this
            <PoseGroup>

              <RoutesContainer key={location.pathname}>

                <Switch location={location}>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/about/" component={AboutPage} />
                  <Route path="/resume/" component={ResumePage} />
                  <Route path="/portfolio/" component={PortfolioPage} />
                  <Route path="/contact/" component={ContactPage} />
                </Switch>

              </RoutesContainer>

            </PoseGroup>

          )} />
          <Navigator
          />
        </div>
      </Router>
    );
  }
}

export default App;

const styles = {
  
  
}