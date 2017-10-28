import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';

import classnames from 'classnames';
import { getOneBook,editBook } from '../actions/BookAction';
//--------------------------------------------------------------------------
class BookEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', author: '' , id : '' ,price : ''};
    
    this.props.dispatch(getOneBook(this.props.params.id));
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //--------------------------------------------------------------------------
  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps............ from edit');
    console.log(newProps)
    this.setState({
      name: newProps.book.name,
      author: newProps.book.author,
      price:newProps.book.price 
     
    })
  }
  //--------------------------------------------------------------------------
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  //--------------------------------------------------------------------------
  handleSubmit(event) {
    event.preventDefault();
    var Id = this.props.params.id;
    var obj = {};
    obj["id"] = Id
    obj["name"] = this.state.name
    obj["author"] = this.state.author
    obj["price"] = this.state.price
    
    this.props.dispatch(editBook(obj))
  }
  //--------------------------------------------------------------------------
  render() {
    return (
       <div className="container">
        <div className="panel">
          <div className="panel-heading">
            <h3 className="panel-title">Add Book Form</h3>
          </div>
          <div className="panel-body">
            
            <form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal">
              <div className="form-group">
                <label htmlFor="name" className="col-sm-2"> book Name</label>
                <div className="col-sm-8">
                  <input type="text" name="name" id="name" className="form-control" value={this.state.name} onChange={this.handleChange.bind(this)} autoFocus/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name" className="col-sm-2">author </label>
                <div className="col-sm-8">
                  <input type="text" name="author" id="author" className="form-control" value={this.state.author} onChange={this.handleChange.bind(this)}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name" className="col-sm-2">price </label>
                <div className="col-sm-8">
                  <input type="text" name="price" id="price" className="form-control" value={this.state.price} onChange={this.handleChange.bind(this)}/>
                </div>
              </div>
             
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-8">
                  <button type="submit" className="btn btn-success">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    );
  }
}
// ======================== REDUX CONNECTORS ========================
const mapStateToProps = (state) => {
  return {

  
    books: state.bookReduecer.books,
    book: state.bookReduecer.book
  };
};

export default connect(mapStateToProps)(BookEdit);
