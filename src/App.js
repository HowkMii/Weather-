  import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "weather-icons/css/weather-icons.css";
import Weather from "./App_component/weather.component";
const Api_key ="a736a6842f443ce3c9aedfa77306f8f4";
//api.openweathermap.org/data/2.5/weather?q=London,uk

class App extends React.Component{
  constructor(){
    super();
    this.state={
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: null,
      temp_min: null,
      description: "",
      error: false
    };
    this.getWeather();

  }
  getWeather = async() =>{
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${Api_key}');
    const reponse = await api_call.json();
    console.log(reponse);
    this.setState({
      city: reponse.name,
    }

    )
 
  }
  render(){
    return(
      <div className="App">
        <Weather city={this.state.city} country={this.state.country}/>
      </div>
    
    );
  }
}



export default App;
