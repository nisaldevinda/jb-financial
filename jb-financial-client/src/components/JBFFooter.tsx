import jbfLogo from "/logo.svg";

function JBFFooter() {
  return (
    <div className="bg-neutral-lightest px-4 py-8 md:px-20 md:py-20 2xl:px-40 2xl:py-20 flex flex-col md:flex-row gap-6 md:gap-16">
      <div className="flex flex-col w-full md:w-1/4 items-start gap-4">
        <img src={jbfLogo} className="mr-3 h-6 sm:h-9" alt="JB Financial" />
        <p className="regularText neutralText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex flex-col w-full md:w-1/4 gap-4">
        <h1 className="switzer-sb text-base md:text-xl uppercase text-text-dark">
          Funds
        </h1>
        <a href="/funds" className="regularText neutralText">
          Our Funds
        </a>
        <a href="/funds/value-equity-fund" className="regularText neutralText">
          Value Equity Fund
        </a>
        <a href="/funds/money-market-fund" className="regularText neutralText">
          Money Market Fund
        </a>
        <a
          href="/funds/short-term-gilt-fund"
          className="regularText neutralText"
        >
          Short Term Gilt Fund
        </a>
      </div>
      <div className="flex flex-col w-full md:w-1/4 gap-4">
        <h1 className="switzer-sb text-base md:text-xl uppercase text-text-dark">
          Company
        </h1>
        <a href="/about" className="regularText neutralText">
          About
        </a>
        <a href="/blogs" className="regularText neutralText">
          Blogs
        </a>
        <a href="/team" className="regularText neutralText">
          Team
        </a>
        <a href="/careers" className="regularText neutralText">
          Careers
        </a>
        <a href="/contact" className="regularText neutralText">
          Careers
        </a>
      </div>
      <div className="flex flex-col w-full md:w-1/4 gap-4">
        <h1 className="switzer-sb text-base md:text-xl uppercase text-text-dark">
          Other
        </h1>
        <a
          href="/private-wealth-management"
          className="regularText neutralText"
        >
          Private Wealth Management
        </a>
        <a href="/private-asset-management" className="regularText neutralText">
          Private Asset Management
        </a>
        <a
          href="/institutional-wealth-management"
          className="regularText neutralText"
        >
          Institutional Wealth Management
        </a>
        {/*<a href="/blogs/blog-1" className="regularText neutralText">*/}
        {/*  Single Blog*/}
        {/*</a>*/}
        <a href="/careers/senior-manager" className="regularText neutralText">
          Single Career
        </a>
      </div>
    </div>
  );
}

export default JBFFooter;
