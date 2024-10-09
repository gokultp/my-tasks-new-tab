import logo from './logo.svg';
import './App.css';

const handleClick = ()=> {
  chrome.storage.local.set({ key: 'Test value' }).then(() => {
    console.log("Value is set");
  });
}
function App() {
  chrome.storage.local.get(["key"]).then((result) => {
    console.log("Got value", result);
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
}

export default App;
