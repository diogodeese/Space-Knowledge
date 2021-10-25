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
        <h1>{app.date}</h1>
        <h4>{app.explanation}</h4>
        <h1>{app.hdurl}</h1>
        <h1>{app.media_type}</h1>
        <h1>{app.service_version}</h1>
        <h1>{app.title}</h1>
        <h1>{app.url}</h1>
        <img src={app.url} alt="Logo" />
      </div>
    );
  }
  return <div className="App"></div>;
}
