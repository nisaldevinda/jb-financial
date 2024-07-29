// Components
import HeroSection from "../components/sections/HeroSection";
import ColumnsSection from "../components/sections/ColumnsSection";
import SideContentSection from "../components/sections/SideContentSection";
import AccordionSection from "../components/sections/AccordionSection";

("use client");

const Home: React.FC = () => {
  const cardData = [
    {
      type: "unitTrust",
      title: "JB Vantage",
      subtitle: "Value Equity Fund",
      description:
        "Invest in equities of publicly listed companies in Sri Lanka and benefit from our rigorous research deep dive research methodology.",
      imageUrl: "/images/unit-trusts/value-equity-fund.png",
      link: "/learn-more",
    },
    {
      type: "unitTrust",
      title: "JB Vantage",
      subtitle: "Money Market Fund",
      description:
        "Experience the relatively higher returns of a fixed deposit with the flexibility of a regular savings account, with minimal fees and quick withdrawal.",
      imageUrl: "/images/unit-trusts/money-market-fund.png",
      link: "/learn-more",
    },
    {
      type: "unitTrust",
      title: "JB Vantage",
      subtitle: "Short Term Gilt Fund",
      description:
        "Invest in government securities such as treasury bills and bonds which are typically considered 'Risk-free' investment instruments.",
      imageUrl: "/images/unit-trusts/short-term-gilt-fund.png",
      link: "/learn-more",
    },
    {
      type: "fundPrice",
      title: "JB Vantage",
      subtitle: "Value Equity Fund",
      link: "/learn-more",
      buyPrice: 120.0,
      sellPrice: 122.0,
    },
    {
      type: "fundPrice",
      title: "JB Vantage",
      subtitle: "Money Market",
      link: "/learn-more",
      buyPrice: 121.0,
      sellPrice: 123.0,
    },
    {
      type: "fundPrice",
      title: "JB Vantage",
      subtitle: "Short Term Gilt Fund",
      link: "/learn-more",
      buyPrice: 118.0,
      sellPrice: 120.0,
    },
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
    {
      type: "blog",
      category: "Investing",
      duration: "3 min",
      title: "Laddering as a strategy",
      description:
        "In a period of declining interest rates, laddering can be a great way to buttress your returns. Let us explain.",
      imageUrl: "/images/blog/sample-blog-1.jpg",
      link: "/learn-more",
    },
    {
      type: "team",
      name: "John Doe",
      designation: "CEO",
      imageUrl: "/images/team/sample-team-1.png",
    },
    {
      type: "team",
      name: "John Doe",
      designation: "CEO",
      imageUrl: "/images/team/sample-team-1.png",
    },
    {
      type: "team",
      name: "John Doe",
      designation: "CEO",
      imageUrl: "/images/team/sample-team-1.png",
    },
    {
      type: "team",
      name: "John Doe",
      designation: "CEO",
      imageUrl: "/images/team/sample-team-1.png",
    },
    {
      type: "team",
      name: "John Doe",
      designation: "CEO",
      imageUrl: "/images/team/sample-team-1.png",
    },
    {
      type: "team",
      name: "John Doe",
      designation: "CEO",
      imageUrl: "/images/team/sample-team-1.png",
    },
    {
      type: "team",
      name: "John Doe",
      designation: "CEO",
      imageUrl: "/images/team/sample-team-1.png",
    },
  ];

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
        renderLeftContent={true} // True [Content on the Left], False [Content on the Right]
      />
      <ColumnsSection
        subtitleText="Explore our *Unit  Trusts*"
        bodyText=""
        buttonText="View All Funds"
        buttonType="secondary" // 'primary' | 'secondary'
        cards={cardData.slice(0, 3)}
        alignText="center" // Change to "left" or "center"
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
        swapContentAndImage={true} // True [Content on the Right], False [Content on the Left]
      />
      <AccordionSection
        title="What kind of investment strategy works for you?"
        highlightedText="investment strategy"
        description="Here are some capital allocation strategies we recommend. They're not definitive, so we encourage talking to our investment advisors to tailor them for you."
        accordionType="faq" // Pass the type of accordion you want to use
      />

      <ColumnsSection
        subtitleText="Latest Fund Prices"
        bodyText=""
        buttonText="View All Funds"
        buttonType="primary" // 'primary' | 'secondary'
        cards={cardData.slice(3, 6)}
        alignText="center" // Change to "left" or "center"
      />
      <div className="flex h-8 bg-blue-50 justify-center items-center switzer-sb">
        TESTIMONIAL SECTION
      </div>
      <ColumnsSection
        subtitleText="Contact Us"
        bodyText=""
        buttonText=""
        buttonType="primary" // 'primary' | 'secondary'
        cards={cardData.slice(6, 9)}
        alignText="left" // Change to "left" or "center"
      />
    </>
  );
};

export default Home;
