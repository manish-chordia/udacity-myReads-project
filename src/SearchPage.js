import React from 'react'
import {Link} from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import Book from "./Book";

class SearchPage extends React.Component {
    state = {
        query: '',
        searchedBooks: []
    };

    handleChange = (e) => {
        const {hashTable} = this.props;
        this.setState({
            query: e.target.value
        },() => {
            BooksAPI.search(this.state.query)
                .then(searchedBooks => {
                    searchedBooks.forEach((book) => book.shelf = hashTable[book.id]  || 'none');

                    this.setState({
                        searchedBooks: searchedBooks
                    });
                })
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState((prevState) => {
            const {searchedBooks} = prevState;
            const {hashTable} = nextProps;
            searchedBooks.forEach((book) => book.shelf = hashTable[book.id]  || 'none');
            return({
                searchedBooks: searchedBooks
            });
        });
    }

    render() {
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchedBooks.map((book, index) => (
                            <Book key={index} bookData={book} onUpdate={this.props.onUpdate}/>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchPage;