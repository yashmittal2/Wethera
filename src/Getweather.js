import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import moment from "moment/moment";
import "./css/Getweather.css";
function GetWeather({ weatherData }) {
  const [myData, setmyData] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${weatherData.lat}&lon=${weatherData.lon}&appid=1591a363f6c1d64d6737802713095e63`
      );
      setmyData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [weatherData]);

  return (
    <div className="inline">
      <div className="ui card">
        {myData && (
          <React.Fragment>
            <div className="content">
              <div className="header">
                <p className="name">
                  {myData.name}, {myData.sys.country}
                </p>
                <p className="date">
                  {moment().format("dddd")}, {moment().format("h:mm ")} AM
                </p>
              </div>
              <div className="description">
                <p className="temp">{Math.round(myData.main.temp - 273.5)}°</p>
                <img
                  src={`https://openweathermap.org/img/w/${myData.weather[0].icon}.png`}
                  alt="Weather Icon"
                  className="imgs"
                />
                <p className="desc">{myData.weather[0].main}</p>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
      <div className="ui card">
        {myData && (
          <React.Fragment>
            <div className="content">
              <div className="header">
                <span className="feel">
                  Feels like {Math.round(myData.main.feels_like - 273.5)}°
                </span>
                {"  "}
                <p className="hum">
                  <i className="arrow up icon" style={{ color: "black" }}></i>
                  <span
                    style={{
                      color: "gray",
                    
                    }}
                  >
                    {Math.round(myData.main.temp_max - 273.5)}°
                  </span>
                </p>
                <p className="hum">
                  <i className="arrow down icon" style={{ color: "black" }}></i>
                  <span
                    style={{
                      color: "gray",
                    
                    }}
                  >
                    {Math.round(myData.main.temp_min - 273.5)}°
                  </span>
                </p>
              </div>
              <div className="description">
                <p className="hum">
                  <i className="tint icon" style={{ color: "black" }}></i>
                  <span
                    style={{
                      color: "gray",
                      
                    }}
                  >
                    {myData.main.humidity} %
                  </span>
                </p>
                <p className="hum">
                  <span style={{ color: "black" }}>Pressure</span>
                  <i
                    className="arrow right icon"
                    style={{ color: "black" }}
                  ></i>
                  <span
                    style={{
                      color: "gray",
                      
                    }}
                  >
                    {myData.main.pressure} hpa
                  </span>
                </p>
                <p className="hum">
                  <span style={{ color: "black" }}>Wind Speed</span>
                  <i
                    className="arrow right icon"
                    style={{ color: "black" }}
                  ></i>
                  <span
                    style={{
                      color: "gray",
                     
                    }}
                  >
                    {myData.wind.speed} m/s
                  </span>
                </p>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default GetWeather;
