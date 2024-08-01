import React from "react";
import HeroSection from "../components/sections/HeroSection";
import ColumnsSection from "../components/sections/ColumnsSection";
import SideContentSection from "../components/sections/SideContentSection";
import AccordionSection from "../components/sections/AccordionSection";
import TestimonialSection from "../components/sections/TestimonialSection";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Reach your financial goals with ease."
        highlightedText="financial goals"
        description="With our investment products, anyone can easily invest and grow their wealth. Take advantage of our diverse range of investment options which includes both unit trusts and private wealth management services."
        button1Text="Schedule an Appointment"
        button2Text=""
        desktopImage="/images/hero/home-d.jpg"
        mobileImage="/images/hero/home-m.jpg"
        renderLeftContent={true}
      />
      <ColumnsSection
        subtitleText="Explore our *Unit  Trusts*"
        bodyText=""
        buttonText="View All Funds"
        buttonType="secondary"
        cardType="unitTrust"
        alignText="center"
      />
      <SideContentSection
        title="Private Wealth Management"
        highlightedText="Private Wealth Management"
        description="We provide institutions and High Net Worth Individuals with private wealth management services where we manage portfolios on their behalf. "
        buttonText="Learn More"
        imageUrl="/images/other/private-wealth-management.png"
      />
      <SideContentSection
        title="Experienced & Award Winning"
        highlightedText="Award Winning"
        description="Our investment committee consists of some of the most experienced and well-known names in Sri Lanka's financial services sector."
        buttonText="Learn More"
        imageUrl="/images/other/award-winning.png"
        imageColumn={{
          title: "RECOGNIZED BY CFA",
          text: "We have been recognized multiple times by the CFA Institute as one of the best unit trusts in Sri Lanka.",
          imageUrl: "/images/awards/cfa.png",
        }}
        swapContentAndImage={true}
      />
      <AccordionSection
        title="What kind of investment strategy works for you?"
        highlightedText="investment strategy"
        description="Here are some capital allocation strategies we recommend. They're not definitive, so we encourage talking to our investment advisors to tailor them for you."
        accordionType="fund"
      />
      <ColumnsSection
        subtitleText="Latest Fund Prices"
        bodyText=""
        buttonText="View All Funds"
        buttonType="primary"
        cardType="fundPrice"
        alignText="center"
      />
      <TestimonialSection
        logoSrc="/weblow.png"
        testimonialText="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”"
        testimonialImageSrc="/testimonial-image.png"
        name="Susantha Susiripala"
        designation="Financial Director at FTL"
      />
      <ColumnsSection
        subtitleText="Contact Us"
        bodyText=""
        buttonText=""
        buttonType="primary"
        cardType="contact"
        alignText="left"
      />
    </>
  );
};

export default Home;
