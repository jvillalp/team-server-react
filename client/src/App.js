import React, {useState} from 'react';
import './App.css';
import BooksForm from './component/BooksForm';
import BooksDisplay from "./component/BooksDisplay";

import axios from 'axios';

const App = () => {
  const [books, setBooks] = useState([])

  const getBooks =() => {
      // console.log('its working');
      axios
          .get('http://localhost:5001/api/books')
          .then(res => {
            console.log(res.data);
            setBooks(res.data)
          })
          .catch( err => {
            console.log(`${err}`)
          })
  }
  return (
    <div className="App">
      <p>Books API</p>
      <BooksForm name={'vader'} getBooksBtn={getBooks}/>
      <BooksDisplay BooksDisplay={books}/>
    </div>
  );
}

export default App;
