import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import useQuestions from "../../hook/useQuestions";
import Answers from "../Answers";
import Miniplayer from "../Miniplayer";
import Progressbar from "../Progressbar";

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });

      return action.value;

    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;

      return questions;

    default:
      return state;
  }
};

function Quiz() {
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [qusn, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();
  const { currentUser } = useAuth();

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function handleAnswerChange(event, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: event.target.checked,
    });
  }

  function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((previus) => previus + 1);
    }
  }

  function previousQuestion() {
    if (currentQuestion > 0 && currentQuestion <= questions.length) {
      setCurrentQuestion((previus) => previus - 1);
    }
  }

  async function submit() {
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qusn,
    });

    history.push({
      pathname: `/result/${id}`,
      state: {
        qusn,
      },
    });
  }

  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There is an Error!...</div>}

      {!loading && !error && qusn && qusn.length > 0 && (
        <>
          <h1>{qusn[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>

          <Answers
            options={qusn[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <Progressbar
            nextQuestion={nextQuestion}
            previousQuestion={previousQuestion}
            submit={submit}
            progress={percentage}
          />
          <Miniplayer />
        </>
      )}
    </>
  );
}

export default Quiz;
