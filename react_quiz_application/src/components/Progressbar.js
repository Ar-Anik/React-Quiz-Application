import classes from "../styles/Progressbar.module.css";
import Button from "./Button";

function Progressbar({ nextQuestion, previousQuestion, submit, progress }) {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={previousQuestion}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>{progress}% Cimplete!</div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <Button
        className={classes.next}
        onClick={progress === 100 ? submit : nextQuestion}
      >
        <span>Next Question</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
}

export default Progressbar;
