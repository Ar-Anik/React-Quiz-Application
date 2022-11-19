import classes from "../styles/Illustration.module.css";

function Illustration({ image, alter }) {
  return (
    <div className={classes.illustration}>
      <img src={image} alt={alter} />
    </div>
  );
}

export default Illustration;
