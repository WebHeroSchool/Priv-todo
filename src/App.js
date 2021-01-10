import logo from './logo.svg';
import './App.css';
import { count, length } from './number';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='Wrap'>
          <p>
            count * length = { count * length }
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
