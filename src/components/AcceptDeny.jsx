import React, { Component } from "react";
import ReactDOM from "react-dom";

class AcceptDeny extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <center>
          <button
            type="button"
            onClick={this.handleDeny}
            className="btn btn-danger m-4"
          >
            Trash
          </button>
          <button
            type="button"
            onClick={this.handleAccept}
            className="btn btn-success m-4"
          >
            Munch
          </button>
        </center>
      </React.Fragment>
    );
  }

  handleAccept = e => {
    e.preventDefault();
    this.props.getNewCardAccept();
  };

  handleDeny = e => {
    e.preventDefault();
    this.props.getNewCard();
  };
}

export default AcceptDeny;
