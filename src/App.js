import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

//Css
import './App.css'

//Components
import SearchPage from './SearchPage'
import Main from './Main'

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount () {
    BooksAPI.getAll()
        .then(books => {
            const hashTable = {};
            books.forEach( book => hashTable[book.id] = book.shelf);
            this.setState({
                books: books,
                hashTable: hashTable
            })
        })
  }

  updateBook = (updatedBook, updatedShelf) => {
    BooksAPI.update(updatedBook, updatedShelf)
        .then(() => {
            this.setState((prevState) => {
                const {books, hashTable} = prevState;
                hashTable[updatedBook.id] = updatedShelf;
                if(hashTable[updatedBook.id] !== undefined) {
                    books.forEach(book => {
                        if(book.id === updatedBook.id){
                            book.shelf = updatedShelf;
                        }
                    })
                }
                else{
                    BooksAPI.get(updatedBook.id)
                        .then(book => books.push(book))
                }

                return({
                    books: books,
                    hashTable: hashTable
                });
            });
        })
  };

  render() {
    return (
      <div className="app">
          <Route path='/search' render={() => (
              <SearchPage hashTable={this.state.hashTable} onUpdate={(book, shelf) => this.updateBook(book, shelf)}/>
          )}/>
          <Route exact path='/' render={() => (
              <Main books={this.state.books} onUpdate={(book, shelf) => this.updateBook(book, shelf)}/>
          )}/>
      </div>
    )
  }
}

export default BooksApp
