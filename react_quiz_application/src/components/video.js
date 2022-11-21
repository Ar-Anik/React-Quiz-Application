import { Link } from "react-router-dom";
import classes from "../styles/Video.module.css";

function Video({ picture, questionNumber, score }) {
  return (
    <Link exact to="/quiz">
      <div className={classes.video}>
        <img src={picture} alt="Not Found" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={classes.qmeta}>
          <p>{questionNumber}</p>
          <p>{score}</p>
        </div>
      </div>
    </Link>
  );
}

export default Video;
