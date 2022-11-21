import { Link } from "react-router-dom";
import classes from "../styles/Account.module.css";

function Account() {
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link exact to="/signup">
        signup
      </Link>
      <Link exact to="/login">
        login
      </Link>
    </div>
  );
}

export default Account;
