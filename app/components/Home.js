import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import { Link } from 'react-router';


import { getBooksHome } from '../actions/BookAction';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


class Home extends React.Component {

   constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.props.dispatch(getBooksHome());
  }




  render() {

    var products = this.props.books;


    return (
      <div className="container">
        <Messages messages={this.props.messages}/>
        <div className="row">

        <Link to={`/add_book`} className="btn btn-info btn-lg"> Add a New Book</Link>
        <hr/>
        <Link to={`/booklist`} className="btn btn-info btn-lg"> booklist Edit</Link>

         <BootstrapTable data={products} striped hover pagination={true} search>
            <TableHeaderColumn isKey dataField='_id'>Product ID</TableHeaderColumn>

            <TableHeaderColumn dataField='name'>Book Name</TableHeaderColumn>
            <TableHeaderColumn dataField='author'>Author</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
            


          </BootstrapTable>








          <hr />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    books: state.bookReduecer.books
    
  };
};

export default connect(mapStateToProps)(Home);
