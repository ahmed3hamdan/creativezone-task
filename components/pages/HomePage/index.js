import HeadSection from "./HeadSection";
import ServicesSection from "./ServicesSection";
import ContactSection from "./ContactSection";

const HomePage = () => {
  return (
    <>
      <HeadSection />
      <ServicesSection id="services" />
      <ContactSection id="contact" />
    </>
  );
};

export default HomePage;
