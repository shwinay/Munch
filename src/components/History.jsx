import React, { Component } from "react";
import ReactDOM from "react-dom";
import firebase from "./../firebase.js";
import FoodCard from "./FoodCard";

class History extends Component {
  state = { history: [] };
  dbRef = firebase.database().ref("preferences");

  componentDidMount() {
    this.dbRef.on("value", snapshot => {
      let values = snapshot.val();
      this.state.history = [];
      for (let value in values) {
        let food = values[value].food;
        let imageLink = values[value].imageLink;
        let link = values[value].link;
        this.state.history.push(
          <FoodCard description={food} foodImage={imageLink} learnMore={link} />
        );
      }
      this.setState({});
      console.log(this.state.history);
    });
  }

  render() {
    return (
      <React.Fragment>
        <center>
          <h1 className="m-4 display-4">Food Selection History</h1>
          {this.getHistoryToggleButton()}
          {this.getFormattedCards()}
        </center>
      </React.Fragment>
    );
  }

  getFormattedCards = () => {
    let col1 = [];
    let col2 = [];
    this.state.history.forEach((item, i) => {
      if (i % 2 == 0) {
        col1.unshift(item);
      } else {
        col2.unshift(item);
      }
    });
    return (
      <div className="row">
        <div className="col">{col1}</div>
        <div className="col">{col2}</div>
      </div>
    );
  };

  getHistoryToggleButton = () => {
    return (
      <React.Fragment>
        <button
          type="button"
          onClick={this.props.handleHistoryToggle}
          className="btn btn-secondary m-4"
        >
          Go to Selections
        </button>
      </React.Fragment>
    );
  };
}

export default History;
