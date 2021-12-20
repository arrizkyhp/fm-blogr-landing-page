import logo from './logo.svg';
import './assets/css/style.css';

function App() {
  return (
    <div className="App bg-very-light-red">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code class="text-very-dark-blue">src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link text-very-light-red"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
