import HeroSection from "../components/sections/HeroSection";
import ColumnsSection from "../components/sections/ColumnsSection";
import SideContentSection from "../components/sections/SideContentSection";
import AccordionSection from "../components/sections/AccordionSection";

const faqData = [
  {
    question: "What is a unit trust?",
    answer:
      "A unit trust is a collective investment scheme where investors' money is pooled together and professionally managed to invest in a diversified portfolio of securities.",
  },
  {
    question: "Is there a minimum investment?",
    answer: "The minimum investment is one million rupees.",
  },
  {
    question: "Are there any fees involved?",
    answer:
      "Yes, but they're very minimal. Check the fact sheet and prospectuses of each fund to know the exact amounts.",
  },
  {
    question: "Are unit trusts regulated?",
    answer:
      "Yes, unit trusts are regulated and monitored by the Securities and Exchange Commission (SEC) of Sri Lanka.",
  },
];

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
        tabletImage="/images/hero/our-funds-t.jpg"
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
        imageUrl="/images/sections/proactive-strategy.jpg"
      />
      <AccordionSection
        title="Frequently Asked Questions"
        highlightedText="Questions"
        description="Here are some of the most common questions about our services."
        accordionType="faq"
        accordionProps={{ faqs: faqData }}
      />
    </>
  );
}

export default OurFunds;
