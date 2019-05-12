import React, { Component } from "react";
import ReactDOM from "react-dom";

class Jumbotron extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div class="jumbotron container-fluid">
          <center>
            <h1 class="display-4">Munch!</h1>
            <p class="lead">
              An easy way to discover what you really want to eat.
            </p>
          </center>
        </div>
      </React.Fragment>
    );
  }
}

export default Jumbotron;
