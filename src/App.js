import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import "./App.css";
import Search from "./components/Search"
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {

  // function

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/search/:value">
            <Search />
          </Route>
          <Route path="/about/:id" component={About} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;

