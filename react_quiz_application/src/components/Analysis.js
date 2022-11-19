import classes from "../styles/Analysis.module.css";
import Question from "./Question";

function Analysis() {
  return (
    <div className={classes.analysis}>
      <h1>Question Analysis</h1>
      <h4>You Answerd 5 Out of 10 Question Currectly</h4>

      <Question />
    </div>
  );
}

export default Analysis;
