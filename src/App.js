import logo from './logo.svg';
import './App.css';
import ScrollComponent from './ScrollComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ScrollComponent />
    </div>
  );
}

export default App;
