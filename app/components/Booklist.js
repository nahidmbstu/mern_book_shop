import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import { Link } from 'react-router';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { getBooks } from '../actions/BookAction';


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


  render() {

    var products = this.props.books;
    console.log(products)


    return (

      <div className="container">
        <Messages messages={this.props.messages}/>
        <div className="row">

      

         <BootstrapTable data={products} striped hover pagination={true} search>
            <TableHeaderColumn isKey dataField='_id'>Product ID</TableHeaderColumn>

            <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='author'>Phone number</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Expiry</TableHeaderColumn>
            


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

export default connect(mapStateToProps)(Booklist);
