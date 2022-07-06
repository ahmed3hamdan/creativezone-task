import clsx from "clsx";
import classes from "./styles.module.scss";

const Container = ({
  component: Component = "div",
  className,
  size,
  ...rest
}) => (
  <Component
    className={clsx(classes.container, classes[`container-${size}`], className)}
    {...rest}
  />
);

Container.displayName = "Container";

export default Container;
