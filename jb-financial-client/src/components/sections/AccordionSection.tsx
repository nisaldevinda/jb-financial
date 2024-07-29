import React from "react";
import FundAccordion from "../accordions/FundAccordion";
import FaqAccordion from "../accordions/FaqAccordion";

const accordionComponents = {
  fund: FundAccordion,
  faq: FaqAccordion,
};

interface AccordionSectionProps {
  title: string;
  highlightedText: string;
  description?: string;
  buttonText?: string;
  imageUrl?: string;
  textColumns?: Array<{ title: string; text: string }>;
  imageColumn?: { title: string; text: string; imageUrl: string };
  swapContentAndImage?: boolean;
  accordionType: keyof typeof accordionComponents;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  title,
  highlightedText,
  description,
  accordionType,
}) => {
  const titleWords = title.split(" ");
  const AccordionComponent = accordionComponents[accordionType];

  return (
    <section className="bg-white px-4 py-8 md:p-20 2xl:px-40 2xl:py-20 flex flex-col gap-16">
      <div className="flex flex-col gap-10">
        <h2 className="subtitleText text-gray-600">
          {titleWords.map((word, index) =>
            highlightedText.includes(word) ? (
              <span key={index} className="primaryText">
                {word}{" "}
              </span>
            ) : (
              <span key={index}>{word} </span>
            )
          )}
        </h2>
        <p className="bodyText neutralText">{description}</p>
      </div>
      <AccordionComponent />
    </section>
  );
};

export default AccordionSection;
