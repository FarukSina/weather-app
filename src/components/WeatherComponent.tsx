import React, { Component } from "react";
import dayjs from "dayjs";

interface Props {
  cities: string[];
} 

type WeatherState = {
  data: [{
    name: string;
    date: string;
    day: {
      avgtemp_c: number,
      condition: {
        icon: string,
        text: string
      }
    };
  }];
  selectedCity : string;
}

class WeatherComponent extends Component<Props, WeatherState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedCity: "Toronto",
      data: [{
        name: "Toronto",
        date: dayjs().format("MMMM Do YYYY"),
        day: {
          avgtemp_c: 0,
          condition: {
            icon: "asdasasdas",
            text: "asd",
          }
        }
      }],
    };
  }

  fetchWeatherDataAsync = async () => {
    const data = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${this.state.selectedCity}&days=5&aqi=no&alerts=no`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await data.json();
    if (result) {
      this.setState({ data: result?.forecast?.forecastday });
    }
    return result;
  };

  componentDidMount() {
    this.fetchWeatherDataAsync();
  }

  componentDidUpdate(prevProps : Props, prevState : WeatherState) {
    if (prevState.selectedCity !== this.state.selectedCity) {
      this.fetchWeatherDataAsync();
    }
  }

  renderCities = () => {
    return this.props.cities.map((city, index) => {
      return (
        <span
          key={index}
          className={
            this.state.selectedCity === city
              ? "city" + " " + "selected"
              : "city"
          }
          onClick={() => this.setState({ selectedCity: city })}
        >
          {city.toUpperCase()}
        </span>
      );
    });
  };
  renderItems = () => {
    if (!this.state.data) {
      return <div>Data not found</div>;
    }
    return this.state.data.map((item, index) => {
      if (index === 0) {
        console.log("item", item);
        return (
          <div key={index} className="mainItem">
            <div>
              <div className="date">
                {dayjs(item.date).format("dddd") ===
                dayjs(new Date()).format("dddd")
                  ? "Today"
                  : dayjs(item.date).format("dddd")}
              </div>
              <div className="temp">
                <img
                  className="weather2"
                  src={item.day?.condition?.icon.replace('64x64', '128x128')}
                  alt="weather"
                />
                <div>
                  <div
                    className="mainTemp_min textAlignLeft" 
                  >
                    {Math.round(item.day?.avgtemp_c)}º
                  </div>
                  <div className="weather">
                    {item.day?.condition?.text}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
      return (
        <div
          key={index}
          className={`item${index} itemWidth`}
        >
          <div className="dateColor">
            {dayjs(item.date).format("dddd").slice(0, 3)}
          </div>
          <div>
            <img className="weather2" src={item.day?.condition?.icon} alt="weather"/>
            <div className="temp_min">
              {Math.round(item.day?.avgtemp_c)}º
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    if (Object.keys(this.state.data)?.length === 0) {
      <div>Loading...</div>;
    }
    return (
      <div className="container">
        <div className="header">
          <div className="selectCities">{this.renderCities()}</div>
        </div>
        <div className="wrapper">{this.renderItems()}</div>
      </div>
    );
  }
}
export default WeatherComponent;
