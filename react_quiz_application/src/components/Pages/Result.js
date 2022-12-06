import _ from "lodash";
import { useHistory, useParams } from "react-router-dom";
import useAnswers from "../../hook/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

function Result() {
  const { location } = useHistory();
  const { state } = location;
  const { qusn } = state;

  const { id } = useParams();

  const { loading, error, answers } = useAnswers(id);

  function ScoreCalculate() {
    var score = 0;

    answers.forEach((question, indx) => {
      var correct = [],
        check = [];

      question.options.forEach((option, indx1) => {
        if (option.correct) {
          correct.push(indx1);
        }

        if (qusn[indx].options[indx1].checked) {
          check.push(indx1);
          option.checked = true;
        }
      });

      if (_.isEqual(correct, check)) {
        score += 5;
      }
    });

    return score;
  }

  const userScore = ScoreCalculate();

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There are something wrong...</div>}

      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} numOfquestion={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
}

export default Result;
