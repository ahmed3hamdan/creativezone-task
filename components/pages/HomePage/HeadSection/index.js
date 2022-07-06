import Image from "next/image";
import Container from "components/shared/Container";
import classes from "./styles.module.scss";
import bgImage from "./background.png";

const HeadSection = props => (
  <section {...props}>
    <div className={classes.bgImageWrapper}>
      <Image
        src={bgImage}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
        alt="Heading Image"
      />
    </div>
    <div className={classes.header}>
      <Container size="lg">
        <h2 className={classes.title}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vivamus
          posuere mauris lectus, molestie eleifend mi tincidunt nec, Aliquam non
          la
        </h2>
      </Container>
    </div>
  </section>
);

HeadSection.displayName = "HeadSection";

export default HeadSection;
