import classes from "../styles/TextInput.module.css";

function TextInput({ type, placeholder, icon, ...rest }) {
  return (
    <div className={classes.textInput}>
      <input type={type} placeholder={placeholder} {...rest} />
      <span className="material-icons-outlined">{icon}</span>
    </div>
  );
}

export default TextInput;
