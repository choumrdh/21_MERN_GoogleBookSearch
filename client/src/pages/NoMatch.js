import React from "react";

const NoMatch = ()=>{
    return(
        <div className="container mb-5">
        <div className="card">
          <div className="row">
            <div className="col">
              <div className="card-header text-center bg-dark text-white">
                <h1>404 Error!!</h1>
              </div>
            </div>
            <div className="card-body col text-center">
            <img
                  src="https://i.etsystatic.com/19277465/r/il/01bb60/1783401005/il_570xN.1783401005_6ydw.jpg"
                  className="col-12 col-md-3"
                  alt="Cat"
                />
              <h3 className="card-text">
                
               Sorry! The page you are looking for is not found.....
              </h3>
  
            </div>
          </div>
        </div>
      </div>
    );
};

export default NoMatch;