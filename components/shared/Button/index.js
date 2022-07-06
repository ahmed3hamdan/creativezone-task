import { forwardRef } from "react";
import clsx from "clsx";
import classes from "./styles.module.scss";

const Button = forwardRef(
  ({ component: Component = "button", className, ...rest }, ref) => (
    <Component
      className={clsx(classes.button, className)}
      {...rest}
      ref={ref}
    />
  )
);

Button.displayName = "Button";

export default Button;
