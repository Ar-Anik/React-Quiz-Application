import { Link } from "react-router-dom";
import logo from "../images/logo-bg.png";
import classes from "../styles/Navber.module.css";
import Account from "./Account";

function Navber() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link exact to="/" className={classes.brand}>
            <img src={logo} alt="Logo" />
            <h3>Quiz Application</h3>
          </Link>
        </li>
      </ul>

      <Account />
    </nav>
  );
}

export default Navber;
