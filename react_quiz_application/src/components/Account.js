import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Account.module.css";

function Account() {
  const { currentUser, logout } = useAuth();

  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logout}
          >
            logout
          </span>
        </>
      ) : (
        <>
          <Link exact to="/signup">
            Signup
          </Link>
          <Link exact to="/login">
            Login
          </Link>
        </>
      )}
    </div>
  );
}

export default Account;
