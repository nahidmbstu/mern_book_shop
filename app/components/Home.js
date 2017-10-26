import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import { Link } from 'react-router';


import { getBooks } from '../actions/BookAction';




class Home extends React.Component {

   constructor(props) {
    super(props);
    this.state = {

    }
  }




  render() {

    var products = this.props.books;


    return (
      <div className="container">
        <Messages messages={this.props.messages}/>
        <div className="row">

        <Link to={`/add_book`} className="btn btn-info btn-lg"> Add a New Book</Link>
        <hr/>
        <Link to={`/booklist`} className="btn btn-info btn-lg"> booklist</Link>



          <hr />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    books: state.books
  };
};

export default connect(mapStateToProps)(Home);
