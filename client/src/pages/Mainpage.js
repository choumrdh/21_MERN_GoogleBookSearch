import React, { Component } from "react";
import Search from "../components/search/Search";
import ResultContainer from "../components/resultcontainer/ResultContainer";
import API from "../utils/API";

class Mainpage extends Component {
  state = {
    searchBook: "",
    bookList: [],
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    API.googleSearchBook(this.state.searchBook)
      .then((res) => {
        console.log(res);
        if (res.data.totalItems === 0) {
          alert("Please Enter a valid book name");
        } else {
          let searchDatas = res.data.items;
        //   console.log("this is search data", searchDatas)
          searchDatas = searchDatas.map(searchData => {
            searchData = {
              key: searchData.id,
              id: searchData.id,
              title: searchData.volumeInfo.title,
              author: searchData.volumeInfo.authors,
              description: searchData.volumeInfo.description,
              image: searchData.volumeInfo.imageLinks.thumbnail,
              link: searchData.volumeInfo.infoLink,
            };
            return searchData;
          });
          this.setState({ bookList: searchDatas });
        }
      })
      .catch((err) => console.log(err));
  };
//   handleBtnSave = (event) => {
//     event.preventDefault();
//     const book = this.state.bookList
//     API.saveBook({
        
//     })
//   };

  render() {
    return (
      <>
        <Search
          searchBook={this.state.searchBook}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <ResultContainer
          bookList={this.state.bookList}
        //   handleBtnSave={this.handleBtnSave}
        />
      </>
    );
  }
}

export default Mainpage;
