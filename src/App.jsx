import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Route, Switch } from "react-router-dom";
import CourseList from "./CoursesList";
import Error from "./Error";


const App = () => {
  return (
    <>
      <Switch>
          <Route path = "/" component={CourseList}></Route>
          <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
