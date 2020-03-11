import React from "react";

const BooksForm = props => {
  return (
    <div>
      <button onClick={props.getBooksBtn} >Get Awesome {props.name} Books</button>
    </div>
  );
};

export default BooksForm;
