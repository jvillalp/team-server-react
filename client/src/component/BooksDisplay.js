import React from "react";
import cuid from 'cuid';

const BooksDisplay = props => {
  return (
    <div>
      {props.BooksDisplay.map(book => {
        return (
          <div key={cuid()}>
            <h2>Title: {book.title}</h2>
            <p>{book.year}</p>
          </div>
        );
      })}
    </div>
  );
};
export default BooksDisplay;
