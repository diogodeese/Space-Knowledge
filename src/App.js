import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [app, setApp] = useState(null);


  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key="+process.env.REACT_APP_API_KEY
      )
      .then((res) => {
        setApp(res.data);
      });
  });

  if (app) {
    return (
      <div className="App">
        <h1>{app.title}</h1>
        <h4>{app.explanation}</h4>
        <h4>{app.media_type}</h4>
        <h3>{app.service_version}</h3>
        <h2>{app.date}</h2>
        <h4>{app.url}</h4>
        <h4>{app.hdurl}</h4>
        <img src={app.url} alt="Logo" />
      </div>
    );
  }
  return <div className="App"></div>;
}
