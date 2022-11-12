import classes from "../styles/Layout.module.css";
import Navber from "./Navber";

function Layout({ children }) {
  return (
    <>
      <Navber />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
}

export default Layout;
