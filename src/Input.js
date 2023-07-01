import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import "./css/Input.css";
import axios from "axios";
import GetWeather from "./Getweather";

function Input() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1591a363f6c1d64d6737802713095e63`
      );

      setWeatherData(response.data.coord);
    } catch (error) {
      console.log("Error:", error);
    }
    setCity(""); 
  };
 

  return (
    <>
      
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <input
            action="search"
            placeholder="City Name"
            value={city}
            onChange={handleCityChange}
          />
        </Form.Field>
        <Button type="submit">Search</Button>
      </Form>
      {weatherData && <GetWeather weatherData={weatherData} />}
    </>
  );
}

export default Input;
