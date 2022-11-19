import classes from "../styles/Button.module.css";

function Button({ className, children, ...rest }) {
  return (
    <div className={`${classes.button} ${className}`} {...rest}>
      {children}
    </div>
  );
}

export default Button;
