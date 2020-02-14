import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header';
import About from './components/pages/About';
import AddBook from './components/AddBook';
import Bookshelf from './components/Bookshelf';

import './App.css';

class App extends React.Component {
  state = {
    books: [
      { title: '1Q84', 
        author: 'Haruki Murakami',
        pages: '928'
      },
      { title: '1Q84', 
        author: 'Haruki Murakami',
        pages: '928'
      },
      { title: '1Q84', 
        author: 'Haruki Murakami',
        pages: '928'
      }
    ]
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div clasName="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Bookshelf books={this.state.books}/>
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
