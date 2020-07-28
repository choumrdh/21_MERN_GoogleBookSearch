import React from "react";

const SavedCard = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {props.title}
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.author}</h5>

        <img src={props.image} alt={props.title} />
        <p className="card-text">{props.description}</p>
      </div>
      
    </div>
  );
};

export default SavedCard;
