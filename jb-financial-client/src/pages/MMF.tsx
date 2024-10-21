import ColumnsSection from "../components/sections/ColumnsSection";
import AccordionSection from "../components/sections/AccordionSection";

import FundHeader from "../components/sections/funds/FundHeader";
import FundDetailsSection from "../components/sections/funds/FundDetailsSection";
import FundStatsSection from "../components/sections/funds/FundStatsSection";
import FundChart2 from "../components/sections/funds/charts/FundChart2";
import FundStewardSection from "../components/sections/funds/FundStewardSection";
import FundDocumentsSection from "../components/sections/funds/FundDocumentsSection";
import React, { useState , useEffect  } from "react";
import axios from "axios";
import {SERVER_URL} from "../Constants.tsx";


const MMF: React.FC = () => {
  // const groups = [
  //   { title: "30%", description: "YTD Return" },
  //   { title: "30%", description: "12M Return" },
  //   {
  //     title: "15%",
  //     description: "Benchmark 12M Return",
  //   },
  // ];

  const [moneyMarketFundUrl, setMoneyMarketFundUrl] = useState('');

  useEffect(() => {
    const fetchDocumentUrl = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/api/fund-doc-urls`);
        const { moneyMarketFundUrl } = response.data;
        setMoneyMarketFundUrl(moneyMarketFundUrl);
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
      filePath: "/docs/mmf/em.pdf",
      imagePath: "/images/documents/mmf-em.jpg",
    },
    {
      title: "Application Form",
      fileType: "PDF",
      fileSize: "3.9MB",
      tags: ["So we can get to know you."],
      buttonText: "View Document",
      filePath: "/docs/mmf/af.pdf",
      imagePath: "/images/documents/af.jpg",
    },
    {
      title: "Purchase Form",
      fileType: "PDF",
      fileSize: "3.9MB",
      tags: ["Purchase units of the fund."],
      buttonText: "View Document",
      filePath: "/docs/mmf/pf.pdf",
      imagePath: "/images/documents/pf.jpg",
    },
    {
      title: "Application Checklist",
      fileType: "PDF",
      fileSize: "3.9MB",
      tags: ["Check whether your application is complete."],
      buttonText: "View Document",
      filePath: "/docs/mmf/ac.pdf",
      imagePath: "/images/documents/ac.jpg",
    },
    {
      title: "Monthly Factsheet",
      fileType: "PDF",
      fileSize: "3.9MB",
      tags: ["Monthly Factsheet for September 2024."],
      buttonText: "View Document",
      filePath: moneyMarketFundUrl,
      imagePath: "/images/documents/mmf-mf.jpg",
    },
  ];
  const fundStats = {
    objective: "Regular income and liquidity",
    strategy: "Invest in short-term corporate issues",
    benchmark: "NDBIB-CRISIL 91 Day T-Bill index",
    investment: "‘Investment grade’, short term instruments",
    fundSize: "LKR 19.88 Billion",
    totalRatio: "0.73%",
  };
  const faqData = [
    {
      question: "What is the minimum investment?",
      answer: "LKR 1 Million.",
    },
    {
      question: "What does the fund primarily invest in?",
      answer:
        "Short-term corporate issues like fixed deposits and commercial papers.",
    },
    {
      question: "Is this fund suitable for risk-averse investors?",
      answer: "Yes, it's designed for investors with low risk tolerance.",
    },
    {
      question: "How liquid is this fund?",
      answer:
        "Funds invested are highly liquid, and suitable for short-term investments.",
    },
    {
      question: "Are the returns taxable?",
      answer:
        "Yes, returns are subject to taxation based on the investor's residency status, but can change depending on applicable tax laws.",
    },
  ];

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
        description={[
          "The JB Vantage Money Market Fund is intended for the short-term investment of excess cash. The amount of income that a unit holder may receive will be largely dependent on the current interest-rate environment. It suits investors who have a short-term savings goal and seek a competitive yield. Withdrawals are speedy, and the fund is a very good alternative to traditional short-term savings options such as savings accounts or fixed deposits.",
          "Compared to rates “locked in” over a longer time horizon, money market funds will generate less income when rates fall due to their shorter time horizon. Conversely, when interest rates rise, money market fund yields tend to rise faster than longer-term maturity products.",
        ]}
        imageUrl="/images/funds/money-market.jpg"
      />
      <FundStatsSection
        objective={fundStats.objective}
        strategy={fundStats.strategy}
        benchmark={fundStats.benchmark}
        investment={fundStats.investment}
        investmentTooltip="Rated BBB - and above"
        fundSize={fundStats.fundSize}
        totalRatio={fundStats.totalRatio}
      />
      <FundChart2
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
        buttonType="primary" // 'primary' | 'secondary'
        buttonLink="/blog"
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

export default MMF;
