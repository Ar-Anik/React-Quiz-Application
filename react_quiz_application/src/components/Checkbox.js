function Checkbox({ className, text, ...rest }) {
  return (
    <lable className={className}>
      <input type="checkbox" {...rest} /> <span>{text}</span>
    </lable>
  );
}

export default Checkbox;
