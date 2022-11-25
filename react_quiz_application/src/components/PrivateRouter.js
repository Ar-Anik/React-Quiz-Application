import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function PrivateRouter({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return currentUser ? (
    <Route {...rest}>{(props) => <Component {...props} />}</Route>
  ) : (
    <Redirect to="/" />
  );
}

export default PrivateRouter;
