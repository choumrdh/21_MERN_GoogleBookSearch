import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css"
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Mainpage from "./pages/Mainpage";
import Savepage from "./pages/Savepage";
import NoMatch from "./pages/NoMatch";


function App() {
  return (
    <>
      <Router>
        <div>
        <Navbar />
        <Header/>
        <Switch>
         <Route exact path="/" component={Mainpage} />
         <Route exact path="/search" component={Mainpage} />
         <Route exact path="/save" component={Savepage} />
         <Route  path="*" component={NoMatch} />
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
