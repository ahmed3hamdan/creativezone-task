import clsx from "clsx";
import classes from "./styles.module.scss";

const TextInput = ({
  component: Component = "input",
  name,
  label,
  errorMessage,
  type = "text",
  className,
  ...rest
}) => (
  <div className={clsx(className, errorMessage && classes.error, classes.root)}>
    <label className={classes.label} htmlFor={name}>
      {label}
    </label>
    <Component
      id={name}
      name={name}
      className={classes.input}
      type={type}
      {...rest}
    />
    {errorMessage && (
      <span className={classes.errorMessage}>{errorMessage}</span>
    )}
  </div>
);

export default TextInput;
