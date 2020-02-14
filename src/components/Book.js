import React from 'react';

class Book extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="book">
                <p>{this.props.book.title}</p>
                <p>{this.props.book.author}</p>
                <p>{this.props.book.pages}</p>
                </div>
            </React.Fragment>
        )
    }
    
}

export default Book;