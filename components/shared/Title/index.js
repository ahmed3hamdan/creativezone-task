import clsx from "clsx";
import classes from "./styles.module.scss";

const Title = ({
  component: Component = "h2",
  className,
  underlined,
  ...rest
}) => (
  <Component
    className={clsx(classes.title, underlined && classes.underlined, className)}
    {...rest}
  />
);

Title.displayName = "Title";

export default Title;
