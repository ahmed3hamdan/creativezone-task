import Head from "next/head";
import HeadSection from "./HeadSection";
import ServicesSection from "./ServicesSection";
import ContactSection from "./ContactSection";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
      </Head>
      <HeadSection />
      <ServicesSection id="services" />
      <ContactSection id="contact" />
    </>
  );
};

HomePage.displayName = "HomePage";

export default HomePage;
