import React from "react";
import SaveCard from "../saveCard/SaveCard";

const SaveCaontainer = (props) => {
  const savedBookList = props.savedBooks;
  console.log(savedBookList);
  return (
    <div className="container">
      <h1>Saved Book List</h1>
      {savedBookList.map((Savedbook, index) => (
        <SaveCard
          key={index}
          _id={Savedbook._id}
          title={Savedbook.title}
          author={Savedbook.author}
          description={Savedbook.description}
          image={Savedbook.image}
          link={Savedbook.link}
          deleteBook={props.deleteBook}
        />
      ))}
    </div>
  );
};

export default SaveCaontainer;
