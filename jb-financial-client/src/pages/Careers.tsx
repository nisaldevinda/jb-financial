// Components
import HeroSection from "../components/sections/HeroSection";
import PlainTextSection from "../components/sections/PlainTextSection";
import AccordionSection from "../components/sections/AccordionSection";

const jobsData = [
  {
    category: "Administration",
    title: "Senior Manager",
    location: "Colombo, Sri Lanka",
    tags: ["Full Time", "On Site", "Senior"],
    link: "/careers/senior-manager",
  },
  {
    category: "Administration",
    title: "Office Administrator",
    location: "Galle, Sri Lanka",
    tags: ["Full Time", "On Site", "Mid-Level"],
    link: "/careers/office-administrator",
  },
  {
    category: "Administration",
    title: "Executive Assistant",
    location: "Kandy, Sri Lanka",
    tags: ["Full Time", "Hybrid", "Junior"],
    link: "/careers/executive-assistant",
  },
  {
    category: "Sales",
    title: "Sales Executive",
    location: "Colombo, Sri Lanka",
    tags: ["Full Time", "On Site", "Mid-Level"],
    link: "/careers/sales-executive",
  },
  {
    category: "Sales",
    title: "Sales Manager",
    location: "Jaffna, Sri Lanka",
    tags: ["Full Time", "Remote", "Senior"],
    link: "/careers/sales-manager",
  },
  {
    category: "Sales",
    title: "Sales Consultant",
    location: "Gampaha, Sri Lanka",
    tags: ["Full Time", "On Site", "Junior"],
    link: "/careers/sales-consultant",
  },
  {
    category: "Accounting",
    title: "Accountant",
    location: "Colombo, Sri Lanka",
    tags: ["Full Time", "On Site", "Mid-Level"],
    link: "/careers/accountant",
  },
  {
    category: "Accounting",
    title: "Junior Accountant",
    location: "Kandy, Sri Lanka",
    tags: ["Full Time", "Hybrid", "Junior"],
    link: "/careers/junior-accountant",
  },
  {
    category: "Accounting",
    title: "Accounts Payable Specialist",
    location: "Galle, Sri Lanka",
    tags: ["Full Time", "On Site", "Senior"],
    link: "/careers/accounts-payable-specialist",
  },
  {
    category: "Finance",
    title: "Finance Manager",
    location: "Colombo, Sri Lanka",
    tags: ["Full Time", "On Site", "Senior"],
    link: "/careers/finance-manager",
  },
  {
    category: "Finance",
    title: "Financial Analyst",
    location: "Negombo, Sri Lanka",
    tags: ["Full Time", "Remote", "Mid-Level"],
    link: "/careers/financial-analyst",
  },
  {
    category: "Finance",
    title: "Investment Banker",
    location: "Colombo, Sri Lanka",
    tags: ["Full Time", "Hybrid", "Senior"],
    link: "/careers/investment-banker",
  },
  {
    category: "Marketing",
    title: "Social Media Manager",
    location: "Jaffna, Sri Lanka",
    tags: ["Full Time", "Remote"],
    link: "/careers/social-media-manager",
  },
  {
    category: "Marketing",
    title: "Marketing Coordinator",
    location: "Colombo, Sri Lanka",
    tags: ["Full Time", "On Site", "Junior"],
    link: "/careers/marketing-coordinator",
  },
  {
    category: "Marketing",
    title: "Content Strategist",
    location: "Galle, Sri Lanka",
    tags: ["Full Time", "Hybrid", "Mid-Level"],
    link: "/careers/content-strategist",
  },
];

const Careers: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Join Our Team"
        highlightedText="Our Team"
        description="Experience a supportive work culture that values collaboration and growth."
        button1Text="Learn More"
        button2Text="Contact Us"
        desktopImage="/images/hero/careers-d.jpg"
        mobileImage="/images/hero/careers-m.jpg"
        renderLeftContent={false} // True [Content on the Left] , False [Content on the Right]
      />
      <PlainTextSection />
      <AccordionSection
        title="Career Opportunities"
        highlightedText="Career"
        accordionType="careers"
        accordionProps={{ jobs: jobsData }}
      />
    </>
  );
};

export default Careers;
