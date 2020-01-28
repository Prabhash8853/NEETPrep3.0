import React, { Component } from "react";
import Homepage from "./Pages/Homepage/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScheduleTest from "./Pages/ScheduleTest/ScheduleTest";
import DailyAssessment from "./Pages/DailyAssessment/DailyAssessment";
import CreateGoal from "./Pages/CreateGoals/CreateGoal";
import Quiz from "./Pages/Quiz/Quiz";
import AssessmentResult from "./Pages/AssessmentResult/AssessmentResult";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/schedule-test" component={ScheduleTest} />
          <Route exact path="/daily-assessment" component={DailyAssessment} />
          {/* <Route path="/create-goal" component={CreateGoal} /> */}
          <Route path="/create-goal/:id" component={CreateGoal} />
          <Route exact path="/Quiz" component={Quiz} />

          <Route exact path="/assessment-result" component={AssessmentResult} />
          <Route path="/assessment-result/:id" component={AssessmentResult} />
        </Switch>
      </Router>
    );
  }
}

export default App;
