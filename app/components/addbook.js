import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import { Link } from 'react-router';
import { saveBook } from '../actions/BookAction';

class Addbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email : '', price: '' };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
     
    var data = {}
    data['name'] = this.state.name,
    data['email'] = this.state.email, 
    data['price'] = this.state.price


    this.props.dispatch(saveBook(data));
  }

  render() {
    return (
      <div className="container">
        <div className="panel">
          <div className="panel-heading">
            <h3 className="panel-title">Add Book Form</h3>
          </div>
          <div className="panel-body">
            <Messages messages={this.props.messages}/>
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
                  <input type="text" name="email" id="email" className="form-control" value={this.state.email} onChange={this.handleChange.bind(this)}/>
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

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Addbook);
