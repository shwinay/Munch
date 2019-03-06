import React, { Component } from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import FoodCard from "./components/FoodCard";
import AcceptDeny from "./components/AcceptDeny";
import Filter from "./components/Filter";
import History from "./components/History";
import "./App.css";
import firebase from "./firebase.js";

class App extends Component {
  state = {
    foodCards: [],
    area: "",
    description: "",
    link: "",
    imageLink: "",
    history: false
  };

  dbRef = firebase.database().ref("preferences");

  componentDidMount() {
    this.getNewCard();
    let data = this.dbRef.on("value", function(snapshot) {
      return snapshot.val();
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        {this.getContent()}
      </React.Fragment>
    );
  }

  fetchFood() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(
      results => {
        results.json().then(data => {
          this.state.foodCards.push(
            <FoodCard
              foodImage={data.meals[0].strMealThumb}
              description={data.meals[0].strMeal}
              learnMore={data.meals[0].strSource}
              area={data.meals[0].strArea}
            />
          );
          this.state.area = data.meals[0].strArea;
          this.state.description = data.meals[0].strMeal;
          this.state.link = data.meals[0].strSource;
          this.state.imageLink = data.meals[0].strMealThumb;
          this.setState({});
        });
      }
    );
  }

  getNewCard = () => {
    this.state.foodCards = [];
    this.fetchFood();
  };

  getNewCardAccept = () => {
    let acceptedFood = {
      food: this.state.description,
      area: this.state.area,
      link: this.state.link,
      imageLink: this.state.imageLink
    };
    this.dbRef.push(acceptedFood);
    this.state.foodCards = [];
    this.fetchFood();
  };

  getContent() {
    if (!this.state.history) {
      return (
        <React.Fragment>
          <center>
            {this.state.foodCards.map(foodCard => (
              <div> {foodCard} </div>
            ))}
            <AcceptDeny
              getNewCard={this.getNewCard}
              getNewCardAccept={this.getNewCardAccept}
            />
            {this.getHistoryToggleButton()}
          </center>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <History handleHistoryToggle={this.handleHistoryToggle} />
        </React.Fragment>
      );
    }
  }

  getHistoryToggleButton = () => {
    return (
      <React.Fragment>
        <button
          type="button"
          onClick={this.handleHistoryToggle}
          className="btn btn-secondary m-4"
        >
          View History
        </button>
      </React.Fragment>
    );
  };

  handleHistoryToggle = () => {
    this.state.history = !this.state.history;
    this.setState({});
  };
}

export default App;
