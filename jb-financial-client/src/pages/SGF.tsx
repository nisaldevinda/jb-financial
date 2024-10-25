import ColumnsSection from "../components/sections/ColumnsSection";
import AccordionSection from "../components/sections/AccordionSection";

import FundHeader from "../components/sections/funds/FundHeader";
import FundDetailsSection from "../components/sections/funds/FundDetailsSection";
import FundStatsSection from "../components/sections/funds/FundStatsSection";
import FundChart3 from "../components/sections/funds/charts/FundChart3";
import FundStewardSection from "../components/sections/funds/FundStewardSection";
import FundDocumentsSection from "../components/sections/funds/FundDocumentsSection";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../Constants.tsx";

const SGF: React.FC = () => {
  // const groups = [
  //   { title: "30%", description: "7 Day Yield" },
  //   { title: "30%", description: "12M Return" },
  //   {
  //     title: "15%",
  //     description: "Benchmark 12M Return",
  //   },
  // ];

  const [shortTermGiltFundUrl, setShortTermGiltFundUrl] = useState("");

  useEffect(() => {
    const fetchDocumentUrl = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/api/fund-doc-urls`);
        const { shortTermGiltFundUrl } = response.data;
        setShortTermGiltFundUrl(shortTermGiltFundUrl);
      } catch (error) {
        console.error("Error fetching document URL:", error);
      }
    };

    fetchDocumentUrl();
  }, []);
  const paragraphs = [
    "Christine set up JB Financial's wealth management operation in 2011 and has worked in private and institutional fund management since 1996. Christine began her career in 1996 with TD Bank Financial Group of Canada in mutual funds and retail treasury, moving onto private asset management. She has worked at CitiNational Investment Bank and independently advised institutions on setting investment policy.​​",
  ];
  const documents = [
    {
      title: "Explanatory Memorandum",
      fileType: "PDF",
      fileSize: "3.9MB",
      tags: ["A detailed overview of fund specifics."],
      buttonText: "View Document",
      filePath: "/docs/sgf/explanatory_memorandum.pdf",
      imagePath: "/images/documents/sgf-em.jpg",
    },
    {
      title: "Application Form",
      fileType: "PDF",
      fileSize: "3.9MB",
      tags: ["So we can get to know you."],
      buttonText: "View Document",
      filePath: "/docs/sgf/application_form.pdf",
      imagePath: "/images/documents/af.jpg",
    },
    {
      title: "Purchase Form",
      fileType: "PDF",
      fileSize: "3.9MB",
      tags: ["Purchase units of the fund."],
      buttonText: "View Document",
      filePath: "/docs/sgf/purchase_form.pdf",
      imagePath: "/images/documents/pf.jpg",
    },
    {
      title: "Application Checklist",
      fileType: "PDF",
      fileSize: "3.9MB",
      tags: ["Check whether your application is complete."],
      buttonText: "View Document",
      filePath: "/docs/sgf/application_checklist.pdf",
      imagePath: "/images/documents/ac.jpg",
    },
    {
      title: "Monthly Factsheet",
      fileType: "PDF",
      fileSize: "3.9MB",
      tags: ["Monthly Factsheet for September 2024."],
      buttonText: "View Document",
      filePath: shortTermGiltFundUrl,
      imagePath: "/images/documents/sgf-mf.jpg",
    },
  ];
  const fundStats = {
    objective: "Capital preservation with moderate returns",
    strategy: "Invest in government securities",
    benchmark: "NDBIB-CRISIL 91 Day T-Bill index",
    investment: "Short-term government securities and REPOs",
    fundSize: "LKR 2.58 Billion",
    totalRatio: "0.56%",
  };
  const faqData = [
    {
      question: "What is the minimum investment?",
      answer: "LKR 1 Million.",
    },
    {
      question: "What securities does this fund invest in?",
      answer: "Government securities like treasury bills, bonds and REPOs.",
    },
    {
      question: "Is this fund regulated?",
      answer:
        "Yes, like all our other funds, it's regulated by the Securities and Exchange Commission of Sri Lanka.",
    },
    {
      question: "How does the risk level compare to other funds?",
      answer:
        "This fund has a lower risk compared to most investments including regular bank savings accounts, money market funds holding corporate securities, and equity funds.",
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
        description={[
          "The JB Vantage Short Term Gilt Fund specializes in investing in gilt-edged securities issued or guaranteed by the Government of Sri Lanka. Common examples of such instruments are treasury bills, treasury bonds and repurchase agreements (REPOs).",
          "Treasury funds are generally expected to be a low risk investment category when compared to both equity and money market funds. However, any dividend paid, or interest accruing will change in line with changes in current interest rates due to the short-term and liquid nature of the fund.",
        ]}
        imageUrl="/images/funds/short-term-gilt.jpg"
      />
      <FundStatsSection
        objective={fundStats.objective}
        strategy={fundStats.strategy}
        benchmark={fundStats.benchmark}
        investment={fundStats.investment}
        fundSize={fundStats.fundSize}
        totalRatio={fundStats.totalRatio}
      />
      <FundChart3
        // groups={groups}
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
        blogCategory="Short Term Gilt Fund"
        buttonType="primary" // 'primary' | 'secondary'
        cardType="blog"
        alignText="left" // Change to "left" or "center"
      />
      <FundStewardSection
        name="Christine Dias Bandaranaike, CFA"
        designation="Portfolio Manager & CEO"
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
