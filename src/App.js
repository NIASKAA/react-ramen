import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Nav, Footer} from './Components'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
          <Switch>

          </Switch>
      </Router>
    </div>
  );
}

export default App;
