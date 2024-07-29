import { useState } from "react";

import HeroSection from "../components/sections/HeroSection";
import ColumnsSection from "../components/sections/ColumnsSection";
import SideContentSection from "../components/sections/SideContentSection";
import BannerSection from "../components/sections/BannerSection";

function PvtWealthMgmt() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeroSection
        title="Private Wealth Management Exclusively For You."
        highlightedText="Exclusively For You."
        description="We provide bespoke wealth management services to HNWIs in Sri Lanka, with specific attention paid to wealth goals and circumstances with the strictest degree of confidentiality."
        button1Text=""
        button2Text=""
        desktopImage="/images/hero/private-wealth-management-d.jpg"
        mobileImage="/images/hero/private-wealth-management-m.jpg"
        renderLeftContent={true} // True [Content on the Left] , False [Content on the Right]
      />
      <SideContentSection
        title="Unlocking Opportunities for Institutional Investors"
        highlightedText="Institutional Investors"
        description="Our wealth management service offers improved price discovery and access to our team's expertise, giving you a competitive edge in the market and helping you make better financial decisions to achieve success."
        newRow={{
          line1: "Better Insights & Market Access",
          line2:
            "Better prices and rates due to our scale and negotiating power",
          line3:
            "An experienced team including lead fund managers who have been in the industry since 1994.",
        }}
        buttonText="Learn More"
        imageUrl="/images/other/institutional-investors.png"
        swapContentAndImage={true} // True [Content on the Right], False [Content on the Left]
      />
      <SideContentSection
        title="Pass down your wealth to the next generation confidently"
        highlightedText="next generation"
        description="Our private asset management service offers dedicated investment advisory services to meet the unique needs of high-net-worth individuals."
        textColumns={[
          {
            title: "Comprehensive",
            text: "Our team of experienced professionals provide personalized investment strategies and guidance.",
          },
          {
            title: "Bespoke",
            text: "We tailor our services to align with your financial goals and risk tolerance.",
          },
        ]}
        buttonText="Learn More"
        imageUrl="/images/other/next-generation.png"
        swapContentAndImage={false} // True [Content on the Right], False [Content on the Left]
      />
      <BannerSection
        title="Learn More About Our Investment Committee"
        description="Our investment committee consists of experienced professionals dedicated to managing your wealth."
        buttonText1="Learn More"
        buttonText2="Contact Us"
        centerAlign={false}
      />
    </>
  );
}

export default PvtWealthMgmt;
