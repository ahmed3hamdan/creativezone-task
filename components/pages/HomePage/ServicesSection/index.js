import Container from "components/shared/Container";
import Title from "components/shared/Title";
import Card from "components/shared/Card";
import classes from "./styles.module.scss";
import {
  faHandshake,
  faMoneyBills,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ServicesSection = props => (
  <Container component="section" className={classes.root} size="xl" {...props}>
    <Title underlined className={classes.title}>
      Services
    </Title>
    <div className={classes.row}>
      <div className={classes.col}>
        <Card>
          <Card.Icon icon={faHandshake} />
          <Card.Title>Business Setup</Card.Title>
          <Card.Description>
            Get a full range of business setup solutions from the region&apos;s
            finest business setup experts…
          </Card.Description>
          <Link href="/" passHref>
            <Card.Button>Learn More</Card.Button>
          </Link>
        </Card>
      </div>
      <div className={classes.col}>
        <Card>
          <Card.Icon icon={faMoneyBills} />
          <Card.Title>Banking</Card.Title>
          <Card.Description>
            Enhance your business with a wide range of financial assistance at
            your fingertips. services…
          </Card.Description>
          <Link href="/" passHref>
            <Card.Button>Learn More</Card.Button>
          </Link>
        </Card>
      </div>
      <div className={classes.col}>
        <Card dark>
          <Card.Icon icon={faNewspaper} />
          <Card.Title>Insurance</Card.Title>
          <Card.Description>
            Compare the best insurance deals from a wide range of options. Get
            home, health, business,…
          </Card.Description>
          <Link href="/" passHref>
            <Card.Button>Learn More</Card.Button>
          </Link>
        </Card>
      </div>
    </div>
  </Container>
);

export default ServicesSection;
