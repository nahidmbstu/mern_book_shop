import { browserHistory } from 'react-router';
import axios from 'axios';


export function saveBook(book) {
  console.log(book)
  return (dispatch) => {

  return axios.post('/add_book/saveBook', {
      headers: { 'Content-Type': 'application/json' },
      book: book
    })
   
  .then(function (res) {  
      browserHistory.push('/');
      console.log(res)
    }).catch(function (err) {
      console.log(" err")
      console.log(err)
    })
  }
}


export function getBooks() {
  return (dispatch) => {
    return axios.post('/booklist', {
    }).then((res) => {
       console.log("get basic user..........................")
      console.log(res)
      dispatch({
        type: 'GET_BOOKS',
        books: res.data
      });
    }).catch(function (err) {
      dispatch({
        type: 'GET_BOOKS_FAILURE',
        messages: err
      });

      console.log(err)
    });
  }
}