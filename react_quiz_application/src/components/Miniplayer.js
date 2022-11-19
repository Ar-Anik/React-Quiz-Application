import image from "../images/3.jpg";
import classes from "../styles/Miniplayer.module.css";

function Miniplayer() {
  return (
    <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
      <span className={[classes.open, "material-icons-outlined"].join(" ")}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span className={[classes.close, "material-icons-outlined"].join(" ")}>
        {" "}
        close{" "}
      </span>
      <img src={image} alt="Not Found" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
}

export default Miniplayer;
