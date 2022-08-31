import React, { Component } from "react";
// import Home from "./components/Home";
import HomeClassComponent from "./components/HomeClassComponent";
import "./css/home.css"
class App extends Component {
  cities = ["Toronto", "Istanbul", "Tokyo"];
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <HomeClassComponent cities={this.cities} />
      </div>
    ); 
  }
}

export default App;
