import React from "react";
// import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
// import ResultContainer from "./components/resultcontainer/ResultContainer";
import Mainpage from "./pages/Mainpage";
import Savepage from "./pages/Savepage";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
        <Navbar />
        <Switch>
         <Route exact path="/" component={Mainpage} />
         <Route exact path="/save" component={Savepage} />
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
