import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import Signup from "./Pages/Signup";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Layout>
        {/* <Home />
      <Signup />
      <Login />
      <Quiz />
      <Result /> */}
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/signup" component={Signup} />

          <Route exact path="/Login" component={Login} />

          <Route exact path="/Result" component={Result} />

          <Route exact path="/Quiz" component={Quiz} />

          <Route exact component={Error} />
        </Switch>
      </Layout>
    </AuthProvider>
  );
}

export default App;
