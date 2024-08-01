import ColumnsSection from "../components/sections/ColumnsSection";
import AccordionSection from "../components/sections/AccordionSection";

import FundHeader from "../components/sections/funds/FundHeader";
import FundDetailsSection from "../components/sections/funds/FundDetailsSection";
import FundStatsSection from "../components/sections/funds/FundStatsSection";
import ChartSection from "../components/sections/funds/ChartSection";
import FundStewardSection from "../components/sections/funds/FundStewardSection";
import FundDocumentsSection from "../components/sections/funds/FundDocumentsSection";

const MMF: React.FC = () => {
  const groups = [
    { title: "30%", description: "Return since inception" },
    { title: "30%", description: "12M Yield" },
    {
      title: "15%",
      description: "Performance of benchmark during last 12 months",
    },
  ];
  const paragraphs = [
    "Christine has worked in private and institutional fund management since 1996 and set up JB Financial’s wealth management operation in 2011. ​She began her career with TD Bank Financial Group of Canada in mutual funds and retail treasury, moving onto private asset management. In Sri Lanka, she has worked at CitiNational Investment Bank and has independently advised institutions on setting investment policy.​ Christine is trained as an economist and holds a MA and a BA (Hons) Economics. She is a CFA charter holder since 1999.​",
  ];
  const documents = [
    {
      title: "Money Market Fund - Introduction",
      fileType: "PDF",
      fileSize: "3.9MB",
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
    objective: "Regular income and liquidity",
    strategy: "Invest in short-term corporate issues",
    benchmark: "NDBIB-CRISIL 91 Day T-Bill index",
    investment: "Low-risk, short-term investments",
  };
  return (
    <>
      <FundHeader
        title="JB Vantage Money Market Fund"
        description="Consider investing in our Money Market Fund as a better alternative to traditional fixed deposits and bank savings accounts."
        tags={["Flexible", "Low-Risk"]}
      />
      <FundDetailsSection
        heading="Fund Objectives & Strategy"
        highlightText="Objectives & Strategy"
        description="The JB Vantage Money Market Fund is a low-risk investment option focusing on a short-term investment strategy. Launched in 2011, the fund invests in instruments such as fixed deposits, commercial papers, and trust certificates issued by regulated commercial banks, finance companies, and other investment-grade corporate issuers. This diversified portfolio aims to provide regular income while maintaining high liquidity. The fund requires a minimum initial investment of LKR 1 Million. Its low-risk profile, combined with a focus on liquidity and regular income, makes it suitable for short-term investors seeking a cash shelter with a low tolerance for risk. The Money Market Fund offers a balance between safety and returns, making it an attractive option for both individual and corporate investors in the Sri Lankan market who prioritize capital preservation and steady income."
        imageUrl="/images/unit-trusts/money-market-fund.png"
      />
      <FundStatsSection
        objective={fundStats.objective}
        strategy={fundStats.strategy}
        benchmark={fundStats.benchmark}
        investment={fundStats.investment}
      />
      <ChartSection
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
        name="Christine"
        designation="Fund Manager"
        imageSrc="/images/team/sample-team-3.png"
        paragraphs={paragraphs}
      />
      <AccordionSection
        title="Frequently asked questions"
        highlightedText="investment strategy"
        description="Find answers to common questions about our funds and the investment process."
        accordionType="mmf"
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

export default MMF;