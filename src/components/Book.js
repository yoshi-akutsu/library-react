import React from 'react';

class Book extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="book" style={bookStyle}>
                    <button style={btnStyle} onClick={this.props.deleteBook.bind(this, this.props.book.id)}>X</button>
                    <p>{this.props.book.title}</p>
                    <p>{this.props.book.author}</p>
                    <p>{this.props.book.pages}</p>
                </div>
            </React.Fragment>
        )
    }
    
}

const bookStyle = {
    border: "2px solid black"
}
const btnStyle = {
    float: 'right'
}

export default Book;