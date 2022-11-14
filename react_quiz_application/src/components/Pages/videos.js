import picture2 from "../../images/3.jpg";
import picture1 from "../../images/4.jpg";
import classes from "../../styles/Videos.module.css";
import Video from "./video";

function Videos() {
  return (
    <div className={classes.videos}>
      <Video
        picture={picture1}
        questionNumber="10 Questions"
        score="Not taken yet"
      />

      <Video
        picture={picture2}
        questionNumber="8 Questions"
        score="Not taken yet"
      />

      <Video picture={picture1} questionNumber="10 Questions" score="10 / 10" />

      <Video
        picture={picture2}
        questionNumber={"5 Questions"}
        score={"Not taken yet"}
      />

      <Video
        picture={picture1}
        questionNumber="9 Questions"
        score="Not taken yet"
      />

      <Video picture={picture2} questionNumber="10 Questions" score="5 / 10" />

      <Video picture={picture1} questionNumber="10 Questions" score="7 / 10" />

      <Video picture={picture2} questionNumber="10 Questions" score="8 / 10" />

      <Video picture={picture1} questionNumber="10 Questions" score="3 / 10" />

      <Video picture={picture2} questionNumber="8 Questions" score="5 / 8" />
    </div>
  );
}

export default Videos;
