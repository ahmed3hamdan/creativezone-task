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

Card.displayName = "Card";

Card.Icon = ({ className, icon, ...rest }) => (
  <FontAwesomeIcon
    icon={icon}
    className={clsx(classes.icon, classes.icon)}
    {...rest}
  />
);

Card.Icon.displayName = "Card.Icon";

Card.Title = ({ className, ...rest }) => (
  <h4 className={clsx(classes.title, className)} {...rest} />
);

Card.Title.displayName = "Card.Title";

Card.Description = ({ className, ...rest }) => (
  <p className={clsx(classes.description, className)} {...rest} />
);

Card.Description.displayName = "Card.Description";

Card.Button = forwardRef(
  ({ component: Component = "a", className, ...rest }, ref) => (
    <Component
      className={clsx(classes.button, className)}
      {...rest}
      ref={ref}
    />
  )
);

Card.Button.displayName = "Card.Button";

export default Card;
