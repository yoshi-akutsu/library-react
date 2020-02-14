import React from 'react';

class AddBook extends React.Component {
    state = {
        title: '',
        author: '',
        pages: '', 
        id: '4'
    }
    onChange = (e) => {
        if (e.target.name === 'title'){
            this.setState({ title: e.target.value });
        }
        else if (e.target.name === 'author'){
            this.setState({ author: e.target.value });
        }
        else {
            this.setState({ pages: e.target.value });
        }
        
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.newBook(this.state.title, this.state.author, this.state.pages, this.state.id);
        this.state.id = parseInt(this.state.id, 10) + 1;
        this.setState({ title: '', author: '', pages: ''});
    }

    render() {
        return(
            <form onSubmit={this.onSubmit} >
                <input 
                    type="text" 
                    name="title"
                    placeholder="Book title..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="text" 
                    name="author"
                    placeholder="Book author..."
                    value={this.state.author}
                    onChange={this.onChange}
                />
                <input 
                    type="number" 
                    name="pages"
                    placeholder="Pages..."
                    value={this.state.pages}
                    onChange={this.onChange}
                />
                <input 
                    type="submit" 
                    value="submit" 
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}

export default AddBook;