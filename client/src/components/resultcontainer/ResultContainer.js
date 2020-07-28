import React from "react";
import ResultCard from "../resultCard/ResultCard";

const ResultContainer = (props) => {
  const BookList = props.bookList;
  return (
    <div className="container">
     <h1>Search Book Results</h1>
      {BookList.map((book) => ( 
        <ResultCard
          key={book.key}
          title={book.title}
          author={book.author}
          description={book.description}
          image={book.image}
          link={book.link}
        />
      ))}
    </div>
  );
};

export default ResultContainer;
