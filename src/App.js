import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [app, setApp] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=G1B8m5s7pM0Y0Y7l7zMuDGC4UzvF1u9ldcFAhVSt"
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
