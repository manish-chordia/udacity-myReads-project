import React from 'react'

const Book = ({bookData, onUpdate}) => {
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    {bookData.imageLinks && bookData.imageLinks.thumbnail && <div className="book-cover"
                         style={{width: 128, height: 193, backgroundImage: `url(${bookData.imageLinks.thumbnail})`}}/>}
                    <div className="book-shelf-changer">
                        <select value={bookData.shelf} onChange={(e) => onUpdate(bookData, e.target.value)}>
                            <option disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{bookData.title}</div>
                {bookData.authors && bookData.authors.map((author, index) => (
                    <div className="book-authors" key={index}>{author}</div>
                ))}
            </div>
        </li>
    );
};

export default Book;