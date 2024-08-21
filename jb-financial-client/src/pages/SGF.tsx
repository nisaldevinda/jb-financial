import ColumnsSection from "../components/sections/ColumnsSection";
import AccordionSection from "../components/sections/AccordionSection";

import FundHeader from "../components/sections/funds/FundHeader";
import FundDetailsSection from "../components/sections/funds/FundDetailsSection";
import FundStatsSection from "../components/sections/funds/FundStatsSection";
import FundChart3 from "../components/sections/funds/charts/FundChart3";
import FundStewardSection from "../components/sections/funds/FundStewardSection";
import FundDocumentsSection from "../components/sections/funds/FundDocumentsSection";

const SGF: React.FC = () => {
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
      title: "Short Term Gilt Fund - Introduction",
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
    objective: "Capital preservation with moderate returns",
    strategy: " Invest in government securities",
    benchmark: "NDBIB-CRISIL 91 Day T-Bill index",
    investment: "Low-risk, short-term government securities",
  };
  const faqData = [
    {
      question: "What is the minimum investment?",
      answer: "LKR 1 Million.",
    },
    {
      question: "What securities does this fund invest in?",
      answer: "Government securities like treasury bills and bonds.",
    },
    {
      question: "Is this fund regulated?",
      answer:
        "Yes, like all our other funds, it's regulated by the Securities and Exchange Commission of Sri Lanka.",
    },
    {
      question: "How does the risk level compare to other funds?",
      answer:
        "This fund has a lower risk compared to equity funds, and is almost on par with a regular bank savings account.",
    },
    {
      question: "Is this fund suitable for short-term investing?",
      answer:
        "Yes, it's designed for short-term investors seeking safety and liquidity.",
    },
  ];

  return (
    <>
      <FundHeader
        title="JB Vantage Short Term Gilt Fund"
        description="Consider investing in our Short Term Gilt Fund to gain exposure to relatively risk-free investments such as T-bills and bonds."
        tags={["Flexible", "Low-Risk"]}
      />
      <FundDetailsSection
        heading="Fund Objectives & Strategy"
        highlightText="Objectives & Strategy"
        description="The JB Vantage Short Term Gilt Fund specializes in investing in gilt-edged securities issued or guaranteed by the Government of Sri Lanka. Initiated in 2016, the fund primarily invests in treasury bills and bonds, offering investors exposure to government securities with high credit worthiness and liquidity. This focus on government-backed instruments positions the fund as a lower-risk option compared to equity funds, while still providing potential for returns above typical savings accounts. The fund requires a minimum initial investment of LKR 1 Million. Its short-term focus and government security investment portfolio make it suitable for investors seeking higher levels of safety, greater liquidity, and a low tolerance for risk. The Short Term Gilt Fund also serves as an excellent option for those looking for a cash shelter between investments in the stock market or for short-term parking of funds. It caters to investors who prioritize capital protection while seeking modest returns in the Sri Lankan fixed income market."
        imageUrl="/images/unit-trusts/short-term-gilt-fund.png"
      />
      <FundStatsSection
        objective={fundStats.objective}
        strategy={fundStats.strategy}
        benchmark={fundStats.benchmark}
        investment={fundStats.investment}
      />
      <FundChart3
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
        title="Frequently Asked Questions"
        highlightedText="Questions"
        description="Here are some of the most common questions about our services."
        accordionType="faq"
        accordionProps={{ faqs: faqData }}
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

export default SGF;
