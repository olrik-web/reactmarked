import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from './component/header';
import FrontPage from './component/Frontpage';
import CategoryPage from "./component/CategoryPage";
import AdPage from "./component/AdPage";

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/"><FrontPage /></Route>
        <Route path="/ads/:category"> <CategoryPage /></Route>
        <Route path="/ad/:id"><AdPage/></Route>
      </Switch>
    </div>
  );
}

export default App;