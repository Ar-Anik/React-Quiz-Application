import classes from "../styles/Form.module.css";

function From({ className, children, ...rest }) {
  return (
    <form className={`${className} ${classes.form}`} {...rest}>
      {children}
    </form>
  );
}

export default From;
