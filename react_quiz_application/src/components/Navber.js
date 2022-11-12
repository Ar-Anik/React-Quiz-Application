import logo from "../images/logo-bg.png";
import classes from "../styles/Navber.module.css";
import Account from "./Account";

function Navber() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Logo" />
            <h3>First React Project</h3>
          </a>
        </li>
      </ul>

      <Account />
    </nav>
  );
}

export default Navber;
