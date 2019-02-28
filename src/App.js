import React, { Component } from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import FoodCard from "./components/FoodCard";
import AcceptDeny from "./components/AcceptDeny";
import Filter from "./components/Filter";
import "./App.css";
import firebase from "./firebase.js";

class App extends Component {
  state = {
    foodCards: [],
    area: "",
    description: ""
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
        {this.state.foodCards.map(foodCard => (
          <div> {foodCard} </div>
        ))}
        <AcceptDeny
          getNewCard={this.getNewCard}
          getNewCardAccept={this.getNewCardAccept}
        />
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
      area: this.state.area
    };
    this.dbRef.push(acceptedFood);
    this.state.foodCards = [];
    this.fetchFood();
  };
}

export default App;
