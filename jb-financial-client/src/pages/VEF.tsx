import ColumnsSection from "../components/sections/ColumnsSection";
import AccordionSection from "../components/sections/AccordionSection";

import FundHeader from "../components/sections/funds/FundHeader";
import FundDetailsSection from "../components/sections/funds/FundDetailsSection";
import FundStatsSection from "../components/sections/funds/FundStatsSection";
import FundChart1 from "../components/sections/funds/charts/FundChart1";
import FundStewardSection from "../components/sections/funds/FundStewardSection";
import FundDocumentsSection from "../components/sections/funds/FundDocumentsSection";

const VEF: React.FC = () => {
  const groups = [
    { title: "30%", description: "Return since inception" },
    { title: "30%", description: "12M Yield" },
    {
      title: "15%",
      description: "Performance of benchmark during last 12 months",
    },
  ];
  const paragraphs = [
    "Murtaza Jafferjee has worked in the Sri Lankan equity market since 1994. His experience includes advising individual and institutional investors on investment in equities. At JB Financial, Murtaza functions in the capacity of Director overseeing the company, as a member of the Investment Committee and as portfolio manager for the JB Vantage Value Equity Fund.",
    "Murtaza is currently the chair of Advocata Institute, an independent policy think tank based in Colombo. He previously served as an independent Director of Nations Trust Bank PLC (2010 – 2019) and Serendib Hotels PLC (2010 – 2020). Additionally, he was a director of the Colombo Stock Exchange from April 2007 to August 2009 and February 2019 to July 2020. Murtaza is a past President of CFA Sri Lanka.",
    "Murtaza holds a Masters in Financial Economics from the University of Colombo, Bachelor of Computer Science and Mechanical Engineering from the University of NSW, Australia. He is also a Chartered Financial Analyst.",
  ];
  const documents = [
    {
      title: "Value Equity Fund - Introduction",
      fileType: "PDF",
      fileSize: "3.8MB",
      tags: ["Introduction"],
      buttonText: "Download File",
    },
    {
      title: "Fund Charts 23/24",
      fileType: "XLSX",
      fileSize: "11.2MB",
      tags: ["Analysis", "Charts", "Patterns"],
      buttonText: "Download File",
    },
  ];
  const fundStats = {
    objective: "Long-term capital growth",
    strategy: "Invest in undervalued large and mid-cap stocks",
    benchmark: "S&P Sri Lanka 20 Index",
    investment: "Value investing",
  };
  return (
    <>
      <FundHeader
        title="JB Vantage Value Equity Fund"
        description="Consider investing in our Value Equity Fund for sustainable, long-term returns from the Colombo Stock Exchange with superior ease and efficiency."
        tags={["Diversified", "Sustainable", "High Returns"]}
      />
      <FundDetailsSection
        heading="Fund Objectives & Strategy"
        highlightText="Objectives & Strategy"
        description="The JB Vantage Value Equity Fund is an equity fund that focuses on investing in large and mid-capitalization companies in Sri Lanka. Established in 2012, the fund targets stocks trading at below-average prices but with upside potential, aiming for long-term capital growth. The fund's portfolio is diversified across various sectors of the Sri Lankan economy, providing investors with broad exposure to the country's equity market. Managed by JB Financial (Pvt) Ltd, the fund requires a minimum initial investment of LKR 1 Million. It is designed for medium to long-term investors willing to accept moderate to high levels of risk in pursuit of potentially higher returns in the Sri Lankan equity market. The fund's value-oriented approach aims to capitalize on undervalued opportunities, making it suitable for investors seeking growth through carefully selected equity investments."
        imageUrl="/images/unit-trusts/value-equity-fund.png"
      />
      <FundStatsSection
        objective={fundStats.objective}
        strategy={fundStats.strategy}
        benchmark={fundStats.benchmark}
        investment={fundStats.investment}
      />
      <FundChart1
        groups={groups}
        mainTitle="The numbers speak for themselves"
        mainDescription="For more than a decade, we have remained at the forefront of investment management in Sri Lanka. Our continuous growth is testament to our ability to generate healthy returns for our clients."
        primaryButtonText=""
        secondaryButtonText=""
      />
      <ColumnsSection
        subtitleText="Notes from our Portfolio Manager"
        bodyText="Performance reviews, insights on the economic climate, and more."
        buttonText="View all notes"
        buttonType="primary" // 'primary' | 'secondary'
        cardType="blog"
        alignText="left" // Change to "left" or "center"
      />
      <FundStewardSection
        name="Murtaza Jafferjee"
        designation="Fund Manager"
        imageSrc="/images/team/sample-team-1.png"
        paragraphs={paragraphs}
      />
      <AccordionSection
        title="Frequently asked questions"
        highlightedText="investment strategy"
        description="Find answers to common questions about our funds and the investment process."
        accordionType="vef"
      />
      <FundDocumentsSection
        sectionTitle="Fund Documents"
        description="Explore our current up to date insights on the fund."
        documents={documents}
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

export default VEF;
