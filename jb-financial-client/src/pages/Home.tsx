import React, { useEffect, useState } from "react";
import HeroSection from "../components/sections/HeroSection";
import ColumnsSection from "../components/sections/ColumnsSection";
import SideContentSection from "../components/sections/SideContentSection";
import AccordionSection from "../components/sections/AccordionSection";
import TestimonialSection from "../components/sections/TestimonialSection";

const TESTIMONIALS_JSON_PATH = "/site-data/testimonials.json";

const fundsData = [
  {
    category: "Young Professional",
    description:
      "You've just started doing well in your career, and you've got many decades of professional life ahead of you. You can afford to take a little more risk, so we recommend allocating a higher proportion of funds into the JB Vantage Value Equity Fund.",
    equityPercentage: 80,
    moneyMarketPercentage: 20,
    imageUrl: "/images/strategies/young.jpg",
  },
  {
    category: "Mid Career Professional",
    description:
      "Your career is progressing well and with some years under your belt, you’re starting to think about your family and its future. You want the best of both worlds, so we recommend a balanced allocation into our money market and equity funds.",
    equityPercentage: 50,
    moneyMarketPercentage: 50,
    imageUrl: "/images/strategies/mid-career.jpg",
  },
  {
    category: "Senior Professional",
    description:
      "You’ve made it to the top and retirement is on your mind. You don’t want to take too many risks, but still have some capacity to do so. We recommend investing more into our money market funds and perhaps a little into equity.",
    equityPercentage: 20,
    moneyMarketPercentage: 80,
    imageUrl: "/images/strategies/senior.jpg",
  },
  {
    category: "Retired Individuals",
    description:
      "Time to enjoy the sunset of your life. Conservatism in how you invest is prudent, and we recommend allocating a higher proportion of funds into the JB Vantage Money Market Fund.",
    equityPercentage: 0,
    moneyMarketPercentage: 100,
    imageUrl: "/images/strategies/retired.jpg",
  },
  {
    category: "Corporate Treasurers",
    description:
      "You have some excess cash which you would rather put to work than leave lying around in a low-yield bank account. Our money market funds are highly recommended.",
    equityPercentage: 0,
    moneyMarketPercentage: 100,
    imageUrl: "/images/strategies/corporate.jpg",
  },
];

const Home: React.FC = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch(TESTIMONIALS_JSON_PATH)
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error loading testimonials:", error));
  }, []);

  return (
    <>
      <HeroSection
        title="Reach your financial goals with ease."
        highlightedText="financial goals"
        description="With our investment products, anyone can easily invest and grow their wealth. Take advantage of our diverse range of investment options which includes both unit trusts and private wealth management services."
        button1Text="Schedule an Appointment"
        button1Link="/contact"
        button2Text=""
        desktopImage="/images/hero/home-d.jpg"
        mobileImage="/images/hero/home-m.jpg"
        renderLeftContent={true}
      />
      <ColumnsSection
        subtitleText="Explore our *Unit  Trusts*"
        bodyText=""
        buttonText="View All Funds"
        buttonLink="/funds"
        buttonType="secondary"
        cardType="unitTrust"
        alignText="center"
      />
      <SideContentSection
        title="Private Wealth Management"
        highlightedText="Private Wealth Management"
        description="We provide institutions and High Net Worth Individuals with private wealth management services where we manage portfolios on their behalf. "
        buttonText="Learn More"
        buttonLink="/private-wealth-management"
        imageUrl="/images/sections/private-wealth-management.jpg"
      />
      <SideContentSection
        title="Experienced & Award Winning"
        highlightedText="Award Winning"
        description="Our investment committee consists of some of the most experienced and well-known names in Sri Lanka's financial services sector."
        buttonText="Meet Our Team"
        buttonLink="/team"
        imageUrl="/images/sections/award-winning.jpg"
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
        accordionProps={{ funds: fundsData }}
      />
      <ColumnsSection
        subtitleText="Latest Fund Prices"
        bodyText=""
        buttonText="View All Funds"
        buttonLink="/funds"
        buttonType="primary"
        cardType="fundPrice"
        alignText="center"
      />
      <TestimonialSection testimonials={testimonials} />
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
