import React from 'react'

const BookShelf = ({name, books}) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books}
            </ol>
        </div>
    </div>
);

export default BookShelf;