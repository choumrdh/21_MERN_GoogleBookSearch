import React from "react";
import ResultCard from "../resultCard/ResultCard";

const ResultContainer = (props) => {
  const BookList = props.bookList;
  return (
    <div className="container">
     <h1>Search Book Results</h1>
      {BookList.map((book, index) => ( 
        <ResultCard
          key={index}
          id={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
          image={book.image}
          link={book.link}
          handleBtnSave={props.handleBtnSave}
        />
      ))}
    </div>
  );
};

export default ResultContainer;
