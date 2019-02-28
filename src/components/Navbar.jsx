import React, { Component } from "react";
import ReactDOM from "react-dom";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              Munch!
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
