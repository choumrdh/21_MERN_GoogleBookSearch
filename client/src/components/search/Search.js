import React from "react";

const Search = () => {
  return (
    <form>
      <div className="row align-items-center">
        <div className="col-auto ml-2 flex-column">
          <label for="inputSearch"></label>
          <input
            className="col-form-label text-center"
            type="text"
            id="SearchBook"
            placeholder="Search for Book"
            aria-describedby="searchHelp"
          ></input>
        </div>
        <button type="submit" className="col-auto flex-column btn btn-primary">
          Search Book
        </button>
      </div>
    </form>
  );
};

export default Search;
