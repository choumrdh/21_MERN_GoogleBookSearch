import React from "react";

const ResultCard = (props) => {
  return (
    <div className="card col-12 col-sm-12 col-md-12 col-lg-12 m-3">
      <div className="card-header">
        <h3 className="list-inline-item"><b>{props.title}</b></h3>
        <button className="float-right btn btn-outline-primary m-2">
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </button>
        <button className="float-right btn btn-outline-success m-2"
        id={props.id} onClick={()=>props.handleBtnSave(props.id)}>
            Save
        </button>
        <h5 className="card-title">Written by: {props.author}</h5>
        
      </div>
      <div className="card-body">
        <p className="card-text">
          <img
            src={props.image}
            alt={props.title}
            className="float-left col-12 col-md-3"
          />
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
