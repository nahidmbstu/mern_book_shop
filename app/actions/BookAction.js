import { browserHistory } from 'react-router';
import axios from 'axios';


export function saveBook(data) {
  console.log(data)
  return (dispatch) => {

    return axios.post('/add-book/saveBook', {
      headers: { 'Content-Type': 'application/json' },
      items: data
    }).then(function (res) {  
      browserHistory.push('/');
      console.log(res)
    }).catch(function (err) {
      console.log(" err")
      console.log(err)
    })
  }
}