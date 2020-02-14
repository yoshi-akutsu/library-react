import React from 'react';

class Bookshelf extends React.Component {
    render() {
        return(
            <p>{this.props.books[0].author}</p>
        )
    }
}

export default Bookshelf;