import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox
        className={classes.answer}
        for="option1"
        id="option1"
        text="A New Hope 1"
      />
    </div>
  );
}

export default Answers;
