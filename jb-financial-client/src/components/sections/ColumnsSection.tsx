import React, { useEffect, useState } from "react";
import { UnitTrustCard, unitTrustCardData } from "../cards/UnitTrustCard";
import { FundPriceCard } from "../cards/FundPriceCard";
import { BlogCard } from "../cards/BlogCard";
import { TeamCard, teamCardData } from "../cards/TeamCard";
import { ContactCard, contactCardData } from "../cards/ContactCard";
import { SERVER_URL } from "../../Constants";
import { useHref } from "react-router-dom";

interface ColumnsSectionProps {
  subtitleText: string;
  bodyText?: string;
  buttonText?: string;
  buttonType?: "primary" | "secondary";
  buttonLink?: string;
  cardType: string;
  alignText?: "left" | "center";
}

const cardDataMapping: Record<string, any[]> = {
  unitTrust: unitTrustCardData,
  contact: contactCardData,
  team: teamCardData,
};

const cardComponentMapping: Record<string, React.FC<any>> = {
  unitTrust: UnitTrustCard,
  fundPrice: FundPriceCard,
  contact: ContactCard,
  blog: BlogCard,
  team: TeamCard,
};

const ColumnsSection: React.FC<ColumnsSectionProps> = ({
  subtitleText,
  bodyText,
  buttonText,
  buttonType = "secondary",
  buttonLink,
  cardType,
  alignText = "center",
}) => {
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (cardType === "fundPrice") {
        const response = await fetch(`${SERVER_URL}/api/fund-prices`);
        const data = await response.json();
        setCards(data);
      } else if (cardType === "blog") {
        const response = await fetch(`${SERVER_URL}/api/blogs`);
        const data = await response.json();
        setCards(data);
      } else {
        const data = cardDataMapping[cardType];
        setCards(data || []);
      }
    };

    fetchData();
  }, [cardType]);

  const applyPrimaryTextClass = (text: string) => {
    const words = text.split(" ");
    return (
      <>
        {words.map((word, index) =>
          word.includes("*") ? (
            <span key={index} className="primaryText">
              {word.replace("*", "")}
            </span>
          ) : (
            <span key={index}>{word} </span>
          )
        )}
      </>
    );
  };

  const CardComponent = cardComponentMapping[cardType] || (() => null);

  return (
    <section
      className={`bg-white px-4 py-8 md:p-20 2xl:px-40 2xl:py-20 flex flex-col gap-6 md:gap-16 items-${alignText}`}
    >
      <h2 className={`subtitleText text-neutral-mid text-${alignText}`}>
        {applyPrimaryTextClass(subtitleText)}
      </h2>
      {bodyText && <p className={`bodyText text-${alignText}`}>{bodyText}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 w-full">
        {cards.map((card, index) => {
          return <CardComponent key={index} {...card} />;
        })}
      </div>
      {buttonText && (
        <a
          href={buttonLink}
          rel="noopener noreferrer"
          className="w-full text-center"
        >
          <button className={`${buttonType}-button text-${alignText}`}>
            {buttonText}
          </button>
        </a>
      )}
    </section>
  );
};

export default ColumnsSection;
