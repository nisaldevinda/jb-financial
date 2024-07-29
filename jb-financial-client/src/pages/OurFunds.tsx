import HeroSection from "../components/sections/HeroSection";
import ColumnsSection from "../components/sections/ColumnsSection";
import SideContentSection from "../components/sections/SideContentSection";
import AccordionSection from "../components/sections/AccordionSection";

function OurFunds() {
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
        buttonText="View All Funds"
        buttonType="secondary" // 'primary' | 'secondary'
        cards={cardData.slice(0, 3)}
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
