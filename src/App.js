import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header'
import About from './components/pages/About'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div clasName="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                Library App
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
