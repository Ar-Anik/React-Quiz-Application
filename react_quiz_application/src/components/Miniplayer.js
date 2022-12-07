import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import classes from "../styles/Miniplayer.module.css";

function Miniplayer({ VideoId }) {
  const playerButton = useRef();
  const [status, setStatus] = useState(false);
  const VideoLink = `https://www.youtube.com/watch?v=${VideoId}`;

  function handlePlayer() {
    if (status) {
      setStatus(false);
      playerButton.current.classList.add(classes.floatingBtn);
    } else {
      setStatus(true);
      playerButton.current.classList.remove(classes.floatingBtn);
    }
  }

  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={playerButton}
      onClick={handlePlayer}
    >
      <span className={[classes.open, "material-icons-outlined"].join(" ")}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span className={[classes.close, "material-icons-outlined"].join(" ")}>
        {" "}
        close{" "}
      </span>
      {/* <img src={image} alt="Not Found" /> */}

      <ReactPlayer
        className={classes.player}
        url={VideoLink}
        width="300px"
        height="168px"
        playing={status}
        controls={true}
      />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
}

export default Miniplayer;
