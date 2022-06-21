import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route exact path="/" >
        <header className="App-header">
          <p>LETS GOOOOO</p>
        </header>
      </Route>
      <Route path="/homepage" >
        <Homepage />
      </Route>
    </div>
  );
}

export default App;
