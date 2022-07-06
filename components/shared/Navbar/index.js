import { createContext, forwardRef, useContext, useState } from "react";
import { CSSTransition } from "react-transition-group";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import classes from "./styles.module.scss";
import listTransition from "./list-transition.module.scss";

const context = createContext({});

const Navbar = ({ className, ...rest }) => {
  const [listOpen, setListOpen] = useState(false);

  return (
    <context.Provider value={{ listOpen, setListOpen }}>
      <nav className={clsx(classes.navbar, className)} {...rest} />
    </context.Provider>
  );
};

Navbar.displayName = "Navbar";

Navbar.Brand = forwardRef(
  ({ component: Component = "a", className, ...rest }, ref) => (
    <Component className={clsx(classes.brand, className)} {...rest} ref={ref}>
      LOGO
    </Component>
  )
);

Navbar.Brand.displayName = "Navbar.Brand";

const List = ({ className, ...rest }) => {
  const { listOpen } = useContext(context);
  return (
    <CSSTransition in={listOpen} timeout={300} classNames={listTransition}>
      <ul className={clsx(classes.list, className)} {...rest} />
    </CSSTransition>
  );
};

Navbar.List = List;

Navbar.List.displayName = "Navbar.List";

Navbar.ListItem = ({ className, ...rest }) => (
  <li className={clsx(classes.listItem, className)} {...rest} />
);

Navbar.ListItem.displayName = "Navbar.ListItem";

const Link = (
  { component: Component = "a", className, onClick, ...rest },
  ref
) => {
  const { setListOpen } = useContext(context);
  const handleClick = e => {
    setListOpen(false);
    onClick && onClick(e);
  };
  return (
    <Component
      className={clsx(classes.listLink, className)}
      onClick={handleClick}
      {...rest}
      ref={ref}
    />
  );
};

Navbar.Link = forwardRef(Link);

Navbar.Link.displayName = "Navbar.Link";

const ListButton = ({ className, ...rest }) => {
  const { listOpen, setListOpen } = useContext(context);
  const handleClick = () => setListOpen(state => !state);
  return (
    <button
      className={clsx(classes.listButton, className)}
      onClick={handleClick}
      {...rest}
    >
      <FontAwesomeIcon icon={listOpen ? faXmark : faBars} size="3x" />
    </button>
  );
};

Navbar.ListButton = ListButton;

Navbar.ListButton.displayName = "Navbar.ListButton";

export default Navbar;
