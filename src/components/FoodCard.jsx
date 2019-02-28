import React, { Component } from "react";
import ReactDOM from "react-dom";

class FoodCard extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <center>
          <div className="container m-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={this.props.foodImage}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">{this.props.description}</p>
                <a
                  href={this.props.learnMore}
                  target="_blank"
                  className="btn btn-primary"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </center>
      </React.Fragment>
    );
  }

  getArea() {
    return this.props.area;
  }
}

export default FoodCard;
