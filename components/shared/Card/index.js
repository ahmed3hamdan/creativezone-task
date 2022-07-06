import classes from "./styles.module.scss";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef } from "react";

const Card = ({ className, dark, ...rest }) => (
  <div
    className={clsx(classes.card, dark && classes.dark, className)}
    {...rest}
  />
);

Card.Icon = ({ className, icon, ...rest }) => (
  <FontAwesomeIcon
    icon={icon}
    className={clsx(classes.icon, classes.icon)}
    {...rest}
  />
);

Card.Title = ({ className, ...rest }) => (
  <h4 className={clsx(classes.title, className)} {...rest} />
);

Card.Description = ({ className, ...rest }) => (
  <p className={clsx(classes.description, className)} {...rest} />
);

Card.Button = forwardRef(
  ({ component: Component = "a", className, ...rest }, ref) => (
    <Component
      className={clsx(classes.button, className)}
      {...rest}
      ref={ref}
    />
  )
);

export default Card;
