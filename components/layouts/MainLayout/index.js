import Link from "next/link";
import Navbar from "components/shared/Navbar";
import Container from "components/shared/Container";
import classes from "./styles.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={classes.root}>
      <Navbar>
        <Container className={classes.navbarContainer}>
          <Link href="/" passHref>
            <Navbar.Brand className={classes.navbarBrand} />
          </Link>
          <Navbar.ListButton />
          <Navbar.List>
            <Navbar.ListItem>
              <Link href="/" passHref>
                <Navbar.Link>Home</Navbar.Link>
              </Link>
            </Navbar.ListItem>
            <Navbar.ListItem>
              <Link href="/#services" passHref>
                <Navbar.Link>Services</Navbar.Link>
              </Link>
            </Navbar.ListItem>
            <Navbar.ListItem>
              <Link href="/#contact" passHref>
                <Navbar.Link>Contact Us</Navbar.Link>
              </Link>
            </Navbar.ListItem>
          </Navbar.List>
        </Container>
      </Navbar>
      <main>{children}</main>
    </div>
  );
};

MainLayout.displayName = "MainLayout";

export default MainLayout;
