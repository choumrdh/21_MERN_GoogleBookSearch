import React from "react";

const Search = (props) => {
  return (
    <div className="container">
      <form>
        <div className="row align-items-center">
          <div className="col-auto ml-2 flex-column">
            <label htmlFor="searchBookLabel"></label>
            <input
              className="col-form-label text-center"
              value={props.searchBook}
              type="text"
              name="searchBook"
              placeholder="Search For Book"
              aria-describedby="searchHelp"
              onChange={props.handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="col-auto flex-column btn btn-primary"
            onClick={props.handleFormSubmit}
          >
            Search Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
