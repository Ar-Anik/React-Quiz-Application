import { useMemo } from "react";
import useFetch from "../hook/useFetch";
import image from "../images/success.png";
import classes from "../styles/Summary.module.css";

function Summary({ score, numOfquestion }) {
  const imageKeyword = useMemo(() => {
    if ((score / (numOfquestion * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (numOfquestion * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (numOfquestion * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  }, [score, numOfquestion]);

  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${imageKeyword}&per_page=1`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    }
  );

  // const fetchImage = result ? result?.photos[0].src.medium : image;
  const fetchImage = result ? result?.photos[0].src.medium : image;

  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {numOfquestion * 5}
        </p>
      </div>

      {loading && <div className={classes.badge}>Loading....</div>}

      {error && (
        <div className={classes.badge}>There are Something Wrong...</div>
      )}

      {!loading && !error && (
        <div className={classes.badge}>
          <img src={fetchImage} alt="Success" />
        </div>
      )}
    </div>
  );
}

export default Summary;
