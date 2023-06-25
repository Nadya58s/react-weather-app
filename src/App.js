/** @format */

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>
        <Weather />
      </header>
      <small>
        <a
          href="https://github.com/Nadya58s/weather-app-vanilla1"
          target="_blank"
        >
          Open-source code
        </a>
        by Nadia Sylvester
      </small>
    </div>
  );
}
