import { Route, Switch } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import Signup from "./Pages/Signup";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

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

          <PublicRouter exact path="/signup" component={Signup} />

          <PublicRouter exact path="/login" component={Login} />

          <PrivateRouter exact path="/result/:id" component={Result} />

          <PrivateRouter exact path="/quiz/:id" component={Quiz} />

          <Route exact component={Error} />
        </Switch>
      </Layout>
    </AuthProvider>
  );
}

export default App;
