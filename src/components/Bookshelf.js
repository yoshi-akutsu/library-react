import React from 'react';
import Book from './Book';

class Bookshelf extends React.Component {
    render() {
        return(
            <p>{this.props.books.map((book) => (<Book book={book}/>)
            )}</p>
        )
    }
}

export default Bookshelf;