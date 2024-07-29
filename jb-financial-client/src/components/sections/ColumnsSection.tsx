import React, { useEffect, useState } from "react";
import { UnitTrustCard, unitTrustCardData } from "../cards/UnitTrustCard";
import { FundPriceCard, fundPriceCardData } from "../cards/FundPriceCard";
import { BlogCard, blogCardData } from "../cards/BlogCard";
import { TeamCard, teamCardData } from "../cards/TeamCard";
import { ContactCard, contactCardData } from "../cards/ContactCard";

interface CardProps {
  type: string;
}

interface ColumnsSectionProps {
  subtitleText: string;
  bodyText?: string;
  buttonText?: string;
  buttonType?: "primary" | "secondary";
  cardType: string;
  alignText?: "left" | "center";
}

const cardDataMapping: Record<string, CardProps[]> = {
  unitTrust: unitTrustCardData,
  fundPrice: fundPriceCardData,
  contact: contactCardData,
  blog: blogCardData,
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
  cardType,
  alignText = "center",
}) => {
  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    const data = cardDataMapping[cardType];
    setCards(data);
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

  return (
    <section
      className={`bg-white px-4 py-8 md:p-20 2xl:px-40 2xl:py-20 flex flex-col gap-6 md:gap-16 items-${alignText}`}
    >
      <h2 className={`subtitleText text-gray-600 text-${alignText}`}>
        {applyPrimaryTextClass(subtitleText)}
      </h2>
      {bodyText && <p className={`bodyText text-${alignText}`}>{bodyText}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 w-full">
        {cards.map((card, index) => {
          const CardComponent = cardComponentMapping[cardType];
          return <CardComponent key={index} {...card} />;
        })}
      </div>
      {buttonText && (
        <button className={`${buttonType}-button text-${alignText}`}>
          {buttonText}
        </button>
      )}
    </section>
  );
};

export default ColumnsSection;
