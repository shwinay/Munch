import React, { Component } from "react";
import ReactDOM from "react-dom";
import Select from "react-select";

class Filter extends Component {
  state = {};
  options = [
    { value: "all", label: "All" },
    { value: "british", label: "British" },
    { value: "american", label: "American" },
    { value: "french", label: "French" },
    { value: "canadian", label: "Canadian" },
    { value: "jamaican", label: "Jamaican" },
    { value: "chinese", label: "Chinese" },
    { value: "dutch", label: "Dutch" },
    { value: "egyptian", label: "Egyptian" },
    { value: "greek", label: "Greek" },
    { value: "indian", label: "Indian" },
    { value: "irish", label: "Irish" },
    { value: "japanese", label: "Japanese" },
    { value: "malaysian", label: "Malaysian" }
  ];

  render() {
    return (
      <React.Fragment>
        <center>
          <h1 className="m-4 display-4">Filter by Category</h1>
          <div class="container m-4">
            <center>
              <div class="container">
                <center>
                  <Select options={this.options} />
                </center>
              </div>
            </center>
          </div>
          <button
            type="button"
            class="btn btn-secondary"
            onSubmit={this.onFormSubmit}
          >
            Secondary
          </button>
        </center>
      </React.Fragment>
    );
  }

  onFormSubmit = () => {
    alert("Submit Button Pressed");
  };
}

export default Filter;
