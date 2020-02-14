import React from 'react';
import Book from './Book';

class Bookshelf extends React.Component {

    render() {
        return(
            <p>{this.props.books.map((book) => 
                (<Book key={book.id} book={book} deleteBook={this.props.deleteBook}/>)
            )}</p>
        )
    }
}

export default Bookshelf;