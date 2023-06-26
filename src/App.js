/** @format */

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>
        <Weather />
        <br />
        <small>
          <a
            href="https://github.com/Nadya58s/react-weather-app"
            Class="myGithub"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          by Nadia Sylvester
        </small>
      </header>
    </div>
  );
}
