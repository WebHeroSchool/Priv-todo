import logo from './logo.svg';
import './App.css';

const view = '49';
const flag = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='Wrap'>
          <p style={{
            color: 'red'
          }}>
            "Hello world!"
        </p>
          <p>
            {view}
          </p>
          <p>
            {50}
          </p>
          <p>
            {10 + 10}
          </p>
          <p>
            {flag && 'flag is true'}
          </p>
          <p>
            {flag ? 'flag is true' : 'flag is false'}
          </p>
          <p>
            {undefined}
            {null}
            {true}
            {false}
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
