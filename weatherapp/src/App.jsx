import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [ weather, setWeather ] = useState({
    temp: '',
    desc: '',
    icon: '',
  });

  // 최초 랜더링 시에 url 기준으로 get요청을 함
  // 우리가 필요한 부분만 뽑아내서 집어넣음
  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Busan&units=Metric&APIkey=ce44224452dbcce3f60158593d1add17')
    .then(response => response.json())
    .then(result => {
      setWeather({
        temp: result.main.temp,
        desc: result.weather[0].description,
        icon: result.weather[0].icon
      })
    })
    .catch(error => console.log(error));
  }, []);

  if(weather.icon) {
    return (
        <>
          <p>기온 : {weather.temp}</p>
          <p>설명 : {weather.desc}</p>
          <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="날씨 아이콘" />
        </>
      );
  }
  else {
    return <div>Loading ... </div>
  }
  
}

export default App;
