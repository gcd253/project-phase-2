import './App.css';
import AddChamp from './components/AddChamp';
import Homepage from './components/Homepage';
import { Route } from 'react-router-dom';
import Streams from './components/Streams';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" >
        <header className="App-header">
          <p>LETS GOOOOO</p>
        </header>
      </Route>
      <Route path="/homepage" >
        <Homepage />
      </Route>
      <Route path="/addchampion" >
        <AddChamp />
      </Route>
      <Route path="/streams" >
        <Streams />
      </Route>

    </div>
  );
}

export default App;
