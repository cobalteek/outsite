import logo from './logo.svg';
import map from './images/map outside.svg'
import './App.css';
import Button from "./components/Button/Button";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Created by <code>cobalteek</code> for
        </p>
        <a
          className="App-link"
          href="https://twitch.tv/ebar_drakonov"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ebar drakonov
        </a>
          <Button>meow</Button>
        <img src={map} alt="map outside"/>
        <h1>MAP OUTSIDE</h1>
      </header>
    </div>
  );
}

export default App;
