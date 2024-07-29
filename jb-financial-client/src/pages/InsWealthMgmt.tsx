import HeroSection from "../components/sections/HeroSection";
import SideContentSection from "../components/sections/SideContentSection";
import TextSection from "../components/sections/TextSection";
import TestimonialSection from "../components/sections/TestimonialSection";

function InsWealthMgmt() {
  const groups = [
    {
      title: "+ BETTER INSIGHTS AND MARKET ACCESSS",
      description:
        "As we are in tune with the daily ups-and-downs of the markets we invest in, we are better placed to gauge the impact of a given development and its long term impact, which is what matters.",
    },
    {
      title: "+ Better price discovery due to scale",
      description:
        "As one of the larger investment and fund managers in the country, our long-standing relationships and scale grant us significantly better negotiating power, allowing us to obtain better prices and rates.",
    },
    {
      title: "+ Experience and expertise in public markets",
      description:
        "Investing is an art and a science where both experience and expertise counts. Our lead fund managers have been in the industry since 1994 and possess the wisdom that comes with it.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Prudent investing, guided by your objectives."
        highlightedText=""
        description="Discover the benefits of our Institutional Wealth Management service."
        button1Text=""
        button2Text=""
        desktopImage="/images/hero/institutional-wealth-management-d.jpg"
        mobileImage="/images/hero/institutional-wealth-management-m.jpg"
        renderLeftContent={true} // True [Content on the Left] , False [Content on the Right]
      />
      <SideContentSection
        title="Active investment management made easy."
        highlightedText="made easy."
        description="Our Institutional Wealth Management service offers expert guidance and tailored investment strategies to maximize returns and minimize risk for institutions. With our experienced professionals and comprehensive services, we provide a better option to generate healthy returns without any additional burden on treasury and corporate finance professionals on your team."
        buttonText=""
        imageUrl="/images/other/active-investment.png"
        textColumns={[
          {
            title: "EXPERT GUIDANCE",
            text: "Access to a team of experienced professionals who understand the unique needs of institutions.",
          },
          {
            title: "TAILORED STRATEGIES",
            text: "Customized investment strategies designed to align with your goals and risk tolerance.",
          },
        ]}
        swapContentAndImage={true}
      />
      <TextSection
        groups={groups}
        mainTitle="A better way to manage an institutional portfolio"
        mainDescription="Our Institutional Wealth Management service is tailored to meet the needs of corporates and family offices, providing them with the expertise and support they need to maximize the return of their public market investments."
      />
      <TestimonialSection
        title="Meet our Team"
        description="The portfolio managers, analysts, and financial advisors who make it possible for us to help you achieve your financial goals."
        buttonText1="Learn More"
        buttonText2=""
        centerAlign={true}
      />
    </>
  );
}

export default InsWealthMgmt;
