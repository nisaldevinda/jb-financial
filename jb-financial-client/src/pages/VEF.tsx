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
    "Sashika joined JBF in 2023 as the Chief Investment Officer and Portfolio Manager, primarily focused on the private wealth portfolios and the unit trusts. Prior to joining JB, he served as Vice President at Capital Alliance Investments and Assistant Vice President Treasury at Softlogic Life managing unit trusts and insurance portfolios.",
  ];
  const documents = [
    {
      title: "Explanatory Memorandum",
      fileType: "PDF",
      fileSize: "3.9MB",
      tags: ["A detailed overview of fund specifics."],
      buttonText: "View Document",
      filePath: "/docs/vef/explanatory_memorandum.pdf",
      imagePath: "/images/documents/vef-em.jpg",
    },
    {
      title: "Application Form",
      fileType: "PDF",
      fileSize: "3.9MB",
      tags: ["So we can get to know you."],
      buttonText: "View Document",
      filePath: "/docs/vef/application_form.pdf",
      imagePath: "/images/documents/af.jpg",
    },
    {
      title: "Purchase Form",
      fileType: "PDF",
      fileSize: "3.9MB",
      tags: ["Purchase units of the fund."],
      buttonText: "View Document",
      filePath: "/docs/vef/purchase_form.pdf",
      imagePath: "/images/documents/pf.jpg",
    },
    {
      title: "Application Checklist",
      fileType: "PDF",
      fileSize: "3.9MB",
      tags: ["Check whether your application is complete."],
      buttonText: "View Document",
      filePath: "/docs/vef/application_checklist.pdf",
      imagePath: "/images/documents/ac.jpg",
    },
    {
      title: "Monthly Factsheet",
      fileType: "PDF",
      fileSize: "3.9MB",
      tags: ["Monthly Factsheet for September 2024."],
      buttonText: "View Document",
      filePath: "/docs/vef/mf.pdf",
      imagePath: "/images/documents/test.jpg",
    },
  ];
  const fundStats = {
    objective: "Long-term capital growth",
    strategy: "Invest in undervalued large and mid-cap stocks",
    benchmark: "S&P Sri Lanka 20 Index",
    investment: "Value investing",
  };
  const faqData = [
    {
      question: "What is the minimum investment?",
      answer: "LKR 1 Million.",
    },
    {
      question: "What types of companies does the fund invest in?",
      answer: "Large and mid-capitalization companies in Sri Lanka.",
    },
    {
      question: "Is this fund suitable for short-term investors?",
      answer: "No, it's designed for medium to long-term investors.",
    },
    {
      question: "What is the risk level of this fund?",
      answer: "Moderate to high risk.",
    },
    {
      question: "Are there any fees involved?",
      answer:
        "Yes, front-end fees and other expenses detailed in the fund’s documents.",
    },
  ];

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
        description={[
          "The fundamental investment objective of the JB Vantage Value Equity Fund is to achieve long term capital appreciation through investments in securities of companies which we believe are undervalued by the market and as such, have strong appreciation potential. The Fund may invest in all categories of equity related securities of companies including voting and nonvoting common shares, preference shares, rights, warrants and other equity related issues.",
          "Equity funds are generally expected to be of high risk and/or a “growth” category of investment. This is due to the fact that the Fund invests for capital growth or appreciation, by trying to grow the investor’s money over time through investment in equities. That is, growth is generated through capital gains – profits earned from buying and selling equity securities.",
        ]}
        imageUrl="/images/funds/value-equity.jpg"
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
      <FundDocumentsSection
        sectionTitle="Fund Documents"
        description="Explore our current up to date insights on the fund."
        documents={documents}
      />
      <ColumnsSection
        subtitleText="Notes from our Portfolio Manager"
        bodyText="Performance reviews, insights on the economic climate, and more."
        buttonText="View all notes"
        buttonLink="/blog"
        buttonType="primary" // 'primary' | 'secondary'
        cardType="blog"
        alignText="left" // Change to "left" or "center"
      />
      <FundStewardSection
        name="Sashika Wickramaratne"
        designation="Portfolio Manager & CIO"
        imageSrc="/images/team/sample-team-1.png"
        paragraphs={paragraphs}
      />
      <AccordionSection
        title="Frequently Asked Questions"
        highlightedText="Questions"
        description="Here are some of the most common questions about our services."
        accordionType="faq"
        accordionProps={{ faqs: faqData }}
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
