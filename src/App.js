import './App.css';
import Header from './components/Header/Header.js'
import Authors from './components/Authors/Authors';
import FavAuthors from './components/FavAuthors/FavAuthors';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
       <Header></Header>
          <Switch>
            <Route exact path="/">
              <Authors></Authors>
            </Route>
            <Route path="/authors">
            <Authors></Authors>
            </Route>
            <Route path="/favAuthors">
              <FavAuthors></FavAuthors>
            </Route>
          </Switch>
      </Router>
      
    </div>
  );
}

export default App;


