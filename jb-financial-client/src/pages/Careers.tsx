// Components
import HeroSection from "../components/sections/HeroSection";
import PlainTextSection from "../components/sections/PlainTextSection";
import AccordionSection from "../components/sections/AccordionSection";

const Careers: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Join Our Team"
        highlightedText="Our Team"
        description="Experience a supportive work culture that values collaboration and growth."
        button1Text="Learn More"
        button2Text="Contact Us"
        desktopImage="/images/hero/careers-d.jpg"
        mobileImage="/images/hero/careers-m.jpg"
        renderLeftContent={false} // True [Content on the Left] , False [Content on the Right]
      />
      <PlainTextSection />
      <AccordionSection
        title="Current Openings"
        highlightedText="Openings"
        description="Here are some capital allocation strategies we recommend. They're not definitive, so we encourage talking to our investment advisors to tailor them for you."
        accordionType="careers"
      />
    </>
  );
};

export default Careers;
