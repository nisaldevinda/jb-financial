import { useState } from "react";

// Components
import HeroSection from "../components/sections/HeroSection";
import SideContentSection from "../components/sections/SideContentSection";
import ColumnsSection from "../components/sections/ColumnsSection";
import BannerSection from "../components/sections/BannerSection";
import NumbersSection from "../components/sections/NumbersSection";

const About: React.FC = () => {
  const [count, setCount] = useState(0);

  const cardData = [
    {
      type: "contact",
      imageUrl: "/icons/mail.svg",
      line1: "hello@jbvantage.lk",
      line2: "sales@jbvantage.lk",
      line3: "",
    },
    {
      type: "contact",
      imageUrl: "/icons/phone.svg",
      line1: "+94 11 249 0900",
      line2: "+94 11 249 0950",
      line3: "+94 11 249 0952",
    },
    {
      type: "contact",
      imageUrl: "/icons/map.svg",
      line1: "150, St. Joseph’s Street,",
      line2: "Colombo 14,",
      line3: "Sri Lanka.",
    },
  ];

  const groups = [
    { title: "LKR 27 Billion +", description: "Assets Under Management (AUM)" },
    { title: "380 + ", description: "Satisfied Investors" },
    { title: "11 Years", description: "Of Managing Investments" },
  ];

  return (
    <>
      <HeroSection
        title="Disciplined, thorough investing that suits your needs."
        highlightedText="investing that suits your needs."
        description="Our approach to investing is characterised by a commitment to simplicity and a rigorous focus on fundamental analysis. We believe in thoroughly understanding the underlying factors that drive an asset’s performance and using this knowledge to make informed investment decisions."
        button1Text=""
        button2Text=""
        desktopImage="/images/hero/about-d.jpg"
        mobileImage="/images/hero/about-m.jpg"
        renderLeftContent={false} // True [Content on the Left] , False [Content on the Right]
      />
      <SideContentSection
        title="Simplicity is often the hardest to get right."
        highlightedText=""
        description="That's why it's the best. From Day One, we have always wanted to provide simple and fair investment instruments to our clients. Explore our funds and see how they have performed before making your investment decision."
        buttonText=""
        imageUrl="/images/other/simplicity.png"
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
        swapContentAndImage={true} // True [Content on the Right], False [Content on the Left]
      />
      <NumbersSection
        groups={groups}
        mainTitle="The numbers speak for themselves"
        mainDescription="For more than a decade, we have remained at the forefront of investment management in Sri Lanka. Our continuous growth is testament to our ability to generate healthy returns for our clients."
        primaryButtonText=""
        secondaryButtonText=""
      />
      <BannerSection
        title="Meet our Team"
        description="The portfolio managers, analysts, and financial advisors who make it possible for us to help you achieve your financial goals."
        buttonText1="Learn More"
        buttonText2=""
        centerAlign={true}
      />
      <ColumnsSection
        subtitleText="Contact Us"
        bodyText=""
        buttonText=""
        buttonType="primary" // 'primary' | 'secondary'
        cards={cardData.slice(0, 3)}
        alignText="left" // Change to "left" or "center"
      />
    </>
  );
};

export default About;
