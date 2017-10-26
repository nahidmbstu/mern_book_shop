import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import { Link } from 'react-router';



class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Messages messages={this.props.messages}/>
        <div className="row">

        <Link to={`/add_book`} className="btn btn-info btn-lg"> Add a New Book</Link>

          <hr />
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

export default connect(mapStateToProps)(Home);
