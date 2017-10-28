import React from 'react';
import { connect } from 'react-redux'

import { Link, browserHistory } from 'react-router';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { getBooks, deleteBook } from '../actions/BookAction';


class Booklist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
    console.log("get basic user..........................")



  }


  componentDidMount() {
    this.props.dispatch(getBooks());


  }
  deleteFunc(cell) {
    console.log("button pressed" + cell)
    var id = cell;
    this.props.dispatch(deleteBook(id));
   
  }

  deleteFormatter(cell, row, id) {
    var holder = "/Booklist/edit/" + cell;
    return <button onClick={this.deleteFunc.bind(this, cell)} className="btn btn-info btn-sm"> Delete </button>;
  }



  render() {

    var products = this.props.books;
    console.log(products)

    function editFormatter(cell, row, id) {
      var holder = "/Booklist/edit/" + cell;
      return <Link to={holder} className="btn btn-info btn-sm"> Edit </Link>;
    }

    function enumFormatter(cell, row, enumObject) {
      return enumObject[cell];
    }







    return (

      <div className="container">

        <div className="row">



          <BootstrapTable data={products} striped hover pagination={true} search>
            <TableHeaderColumn isKey dataField='_id'>Product ID</TableHeaderColumn>

            <TableHeaderColumn dataField='name'>Book Name</TableHeaderColumn>
            <TableHeaderColumn dataField='author'>Author</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
            <TableHeaderColumn dataField='_id' dataFormat={editFormatter}>Edit Book</TableHeaderColumn> 
            <TableHeaderColumn dataField='_id' dataFormat={this.deleteFormatter.bind(this)}>Delete Book</TableHeaderColumn>



          </BootstrapTable>



          <hr />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

    books: state.bookReduecer.books
  };
};

export default connect(mapStateToProps)(Booklist);
