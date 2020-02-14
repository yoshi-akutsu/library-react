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
      { id: '1',
        title: '1Q84', 
        author: 'Haruki Murakami',
        pages: '928'
      },
      { id: '2',
        title: 'Thw Windup Bird Chronicle', 
        author: 'Haruki Murakami',
        pages: '726'
      },
      { id: '3',
        title: 'My favortite book', 
        author: 'My favorite author',
        pages: '888'
      }
    ]
  }
  newBook(title, author, pages, id) {
    const newBook = {title, author, pages, id}
    this.setState({ books: [...this.state.books, newBook] })
  }
  deleteBook(id) {
    this.setState({ books: this.state.books.filter((book) => book.id !== id) })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddBook newBook={this.newBook.bind(this)}/>
                <Bookshelf books={this.state.books} deleteBook={this.deleteBook.bind(this)}/>
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
