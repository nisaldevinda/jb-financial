import HeroSection from "../components/sections/HeroSection";
import ColumnsSection from "../components/sections/ColumnsSection";
import SideContentSection from "../components/sections/SideContentSection";
import AccordionSection from "../components/sections/AccordionSection";

function OurFunds() {
  return (
    <>
      <HeroSection
        title="Invest with confidence and clarity."
        highlightedText="confidence clarity."
        description="Explore our range of unit trusts designed to help you achieve your financial goals."
        button1Text="Learn More"
        button2Text=""
        desktopImage="/images/hero/our-funds-d.jpg"
        mobileImage="/images/hero/our-funds-m.jpg"
        renderLeftContent={true} // True [Content on the Left] , False [Content on the Right]
      />
      <ColumnsSection
        subtitleText="Explore our *Unit  Trusts*"
        bodyText=""
        buttonText=""
        buttonType="secondary" // 'primary' | 'secondary'
        cardType="unitTrust"
        alignText="center" // Change to "left" or "center"
      />
      <SideContentSection
        title="A proactive investment strategy for each fund"
        highlightedText="A proactive investment strategy"
        description="Our funds are carefully managed by our experienced investment committee, utilizing a combination of fundamental analysis and quantitative models to identify attractive investment opportunities. Each fund has a distinct investment strategy tailored to meet specific objectives and risk profiles."
        buttonText=""
        imageUrl="/images/other/proactive-investment-strategy.png"
      />
      <AccordionSection
        title="Frequently asked questions"
        highlightedText=""
        description="Find answers to common questions about our funds and the investment process."
        accordionType="faq"
      />
    </>
  );
}

export default OurFunds;
