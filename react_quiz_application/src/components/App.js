import "../styles/App.css";
import Layout from "./Layout";

import { Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import Signup from "./Pages/Signup";

function App() {
  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/quiz" component={Quiz} />
      <Route exact path="/result" component={Result} />
    </Layout>
  );
}

export default App;
