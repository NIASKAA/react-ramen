import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Footer, Navigation} from './Components'
import {Home, AboutUs, Location, Menu} from './Pages'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
          <Switch>
            <Route exact path="/" component={Home}/>  
            <Route exact path="/aboutus" component={AboutUs}/>  
            <Route exact path="/hours&location" component={Location}/>  
            <Route exact path="/menu" component={Menu}/>
          </Switch>
        <Footer/> 
      </Router>
    </div>
  );
}

export default App;
