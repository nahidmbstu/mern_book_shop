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


export function getBooksHome() {
  return (dispatch) => {
    return axios.post('/', {
    }).then((res) => {
       console.log("get basic user..........................honnnnnnnnnnnnnnnnn")
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






export function getOneBook(book_id) {
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_MESSAGES'
    });

    return axios.get('/booklist/getOneBook/' + book_id, {
      headers: {
        'Content-Type': 'application/json'
        
      },
    }).then((res) => {

          dispatch({
              type: 'GET_ONE_BOOK',
              book: res.data
          });

    }).catch(function (error) {
      
          dispatch({
              type: 'BASIC_USER_FAILURE',
              messages: error
          });
      
      })
  };
}


export function editBook(obj) {
  console.log(obj)
  return (dispatch) => {

    return axios.post('/booklist/edit/editBook', {
      headers: { 'Content-Type': 'application/json' },
      obj: obj
    }).then(function (res) {
      browserHistory.push('/');
      console.log(" response from action")
      console.log(res)
    }).catch(function (err) {
      console.log(" err")
      console.log(err)
    })
  }
}



export function deleteBook(id) {

  console.log(id)
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_MESSAGES'
    });
    return axios.get('/booklist/deleteBook/' + id, {
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(function (res) {
      browserHistory.push('/');
      console.log(" response from delete action")
      console.log(res)
    }).catch(function (err) {
      console.log(" err")
      console.log(err)
    })
  };
}


