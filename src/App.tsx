import React, { Component } from "react";
// import Home from "./components/Home";
import WeatherComponent from "./components/WeatherComponent";
import "./css/home.css"
class App extends Component {
  cities = ["Toronto", "Istanbul", "Tokyo"];
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <WeatherComponent cities={this.cities} />
      </div>
    ); 
  }
}

export default App;
