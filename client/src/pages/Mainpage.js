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
        // console.log(res);
        if (res.data.totalItems === 0) {
          alert("Please Enter a valid book name");
        } else {
          let searchDatas = res.data.items;
          //   console.log("this is search data", searchDatas)
          searchDatas = searchDatas.map((searchData) => {
            searchData = {
              key: searchData.id,
              id: searchData.id,
              title: searchData.volumeInfo.title,
              author: searchData.volumeInfo.authors,
              description: searchData.volumeInfo.description,
              image: searchData.volumeInfo.imageLinks
                ? searchData.volumeInfo.imageLinks.smallThumbnail
                : "https://www.brdtex.com/wp-content/uploads/2019/09/no-image-480x480.png",
              link: searchData.volumeInfo.infoLink,
            };
            return searchData;
          });
          this.setState({ bookList: searchDatas, searchBook: "" });
        }
      })
      .catch((err) => console.log(err));
  };

  handleBtnSave = (id) => {
    const saveBook = this.state.bookList.filter((book) => book.id === id)[0];
    API.saveBook({
      title: saveBook.title,
      author: saveBook.author,
      description: saveBook.description,
      image: saveBook.image,
      link: saveBook.link,
    })
      .then((book) => console.log("Successfullly save book", book), alert("Successfullt saved book"))
      .catch((err) => console.log(err));
  };

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
          handleBtnSave={this.handleBtnSave}
        />
      </>
    );
  }
}

export default Mainpage;
