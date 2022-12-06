import { Fragment } from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers({ input, options = [], handleChange }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox
              key={index}
              className={classes.answer}
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(event) => handleChange(event, index)}
            />
          ) : (
            <Checkbox
              key={index}
              className={`${classes.answer} ${
                option.correct
                  ? classes.correct
                  : option.checked
                  ? classes.wrong
                  : null
              }`}
              text={option.title}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}
