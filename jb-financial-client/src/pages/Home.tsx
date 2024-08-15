import React from "react";
import HeroSection from "../components/sections/HeroSection";
import ColumnsSection from "../components/sections/ColumnsSection";
import SideContentSection from "../components/sections/SideContentSection";
import AccordionSection from "../components/sections/AccordionSection";
import TestimonialSection from "../components/sections/TestimonialSection";

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

const testimonials = [
  {
    logoSrc: "/images/testimonials/logo/1.png",
    testimonialText:
      "Investing in JB Vantage's unit trusts has been a game changer for our financial strategy. With a rich history of successful client outcomes, their expertise and management have consistently delivered impressive returns over the years. We couldn't be happier with their service!",
    testimonialImageSrc: "/images/testimonials/user/1.png",
    name: "Alex Johnson",
    designation: "Managing Director, Financial Solutions Ltd.",
  },
  {
    logoSrc: "/images/testimonials/logo/2.png",
    testimonialText:
      "Our experience with JB Vantage has been exceptional. Their unit trusts are meticulously managed, offering a blend of safety and growth that has greatly benefited our portfolio. The track record of satisfied clients speaks volumes about their commitment to excellence.",
    testimonialImageSrc: "/images/testimonials/user/2.png",
    name: "Emily Davis",
    designation: "Senior Investment Analyst, Capital Growth Inc.",
  },
  {
    logoSrc: "/images/testimonials/logo/3.png",
    testimonialText:
      "JB Vantage's unit trusts have proven to be a reliable investment with consistent performance. The firm’s dedication to client satisfaction and their ability to navigate market changes effectively make them a top choice for anyone looking to grow their wealth responsibly.",
    testimonialImageSrc: "/images/testimonials/user/3.png",
    name: "Michael Brown",
    designation: "Chief Financial Officer, Wealth Builders Co.",
  },
  {
    logoSrc: "/images/testimonials/logo/4.png",
    testimonialText:
      "We have been investing with JB Vantage for several years and have always been impressed with their unit trusts' performance. Their team is highly knowledgeable and their strategic approach has resulted in substantial gains for our investments. Highly recommended!",
    testimonialImageSrc: "/images/testimonials/user/4.png",
    name: "Sarah Wilson",
    designation: "Portfolio Manager, Secure Invest Ltd.",
  },
  {
    logoSrc: "/images/testimonials/logo/5.png",
    testimonialText:
      "JB Vantage has delivered outstanding results through their unit trusts. Their deep understanding of market dynamics and dedication to achieving client goals are evident in the consistent and strong returns we've experienced. It’s been a pleasure working with them.",
    testimonialImageSrc: "/images/testimonials/user/5.png",
    name: "David Lee",
    designation: "Director of Investments, Horizon Financial Group",
  },
];

const Home: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Reach your financial goals with ease."
        highlightedText="financial goals"
        description="With our investment products, anyone can easily invest and grow their wealth. Take advantage of our diverse range of investment options which includes both unit trusts and private wealth management services."
        button1Text="Schedule an Appointment"
        button1Link="/"
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
