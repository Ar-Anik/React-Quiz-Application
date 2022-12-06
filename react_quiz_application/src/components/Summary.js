import image from "../images/success.png";
import classes from "../styles/Summary.module.css";

function Summary({ score, numOfquestion }) {
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {numOfquestion * 5}
        </p>
      </div>

      <div className={classes.badge}>
        <img src={image} alt="Success" />
      </div>
    </div>
  );
}

export default Summary;
