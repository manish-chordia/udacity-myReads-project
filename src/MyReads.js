import React from 'react'
import BookShelf from './BookShelf'
import Book from './Book'

class MyReads extends React.Component {
    render() {
        const currentlyReadingBooks = this.props.books.filter(book => book.shelf === 'currentlyReading')
            .map((book, index) => (<Book key={index} bookData={book} onUpdate={this.props.onUpdate}/>));
        const wantToReadBooks = this.props.books.filter(book => book.shelf === 'wantToRead')
            .map((book, index) => (<Book key={index} bookData={book} onUpdate={this.props.onUpdate}/>));
        const readBooks = this.props.books.filter(book => book.shelf === 'read')
            .map((book, index) => (<Book key={index} bookData={book} onUpdate={this.props.onUpdate}/>));

        const allBooks = [
            {name: 'Currently Reading', books: currentlyReadingBooks},
            {name: 'Want to Read', books: wantToReadBooks},
            {name: 'Read', books: readBooks}
        ];
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {allBooks.map((bookCompartment, index) => (
                        <BookShelf key={index} books={bookCompartment.books} name={bookCompartment.name}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default MyReads;