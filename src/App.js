import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Footer, Navigation} from './Components'
import {Home} from './Pages'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
          <Switch>
            <Route exact path="/" component={Home}/>  
          </Switch>
        <Footer/> 
      </Router>
    </div>
  );
}

export default App;
