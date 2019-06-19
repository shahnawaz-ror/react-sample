import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Users from "./pages/Users";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import About from "./pages/About";

class App extends Component{
  render(){
    return <Router>
      <Switch>
        <Route exact path="/" component={HomePage} /> 
        <Route exact path="/404" component={PageNotFound} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/contact_us" component={ContactUs} />
        <Route exact path="/about_us" component={About} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  }
}
export default App;