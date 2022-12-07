import { useRef, useState } from "react";
import classes from "../styles/Progressbar.module.css";
import Button from "./Button";

function Progressbar({ nextQuestion, previousQuestion, submit, progress }) {
  const tooltipRef = useRef();
  const [tooltip, setTooltip] = useState(false);

  function handleTooltip() {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.display = "block";
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
    }
  }

  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={previousQuestion}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip} ref={tooltipRef}>
          {progress}% Cimplete!
        </div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
            onMouseOver={handleTooltip}
            onMouseOut={handleTooltip}
          ></div>
        </div>
      </div>
      <Button
        className={classes.next}
        onClick={progress === 100 ? submit : nextQuestion}
      >
        <span>{progress === 100 ? "Submit Answer" : "Next Question"}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
}

export default Progressbar;
