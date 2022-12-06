import classes from "../styles/Question.module.css";
import Answers from "./Answers";

function Question({ answers = [] }) {
  return answers.map((answer, index) => (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span class="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answers input={false} options={answer.options} />
    </div>
  ));
}

export default Question;
