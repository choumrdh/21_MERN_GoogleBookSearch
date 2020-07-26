import React from "react";
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar";
import ResultContainer from "./components/resultcontainer/ResultContainer";
import Mainpage from "./pages/Mainpage"
import Savepage from "./pages/Savepage"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
        <Header />
        <ResultContainer />
      <Router>
        

        <Switch>
          <Route exact path="/" component={Mainpage}/>
          <Route exact path="/save" component={Savepage}/>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
