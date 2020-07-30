import React, { Component } from 'react';
import SaveContainmer from "../components/saveContainer/SaveContainer";
import API from '../utils/API';

class Savepage extends Component {
    state = { 
        savedBooks:[]
     };

     componentDidMount(){
         this.loadBooks();
     };
     
     loadBooks=()=>{
         API.getBooks()
         .then(res=>this.setState({savedBooks: res.data}))
         .catch(err => console.log(err))
     };
     deleteBook = id=>{
         API.deleteBook(id)
        .then(res=>this.loadBooks())
        .catch(err=>console.log(err))
     }
    render() { 
        return ( 
           <SaveContainmer
           savedBooks={this.state.savedBooks}
           deleteBook={this.deleteBook}
           />
         );
    }
}
 
export default Savepage
;