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