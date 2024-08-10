import React from "react";
import FundAccordion from "../accordions/FundAccordion";
import FaqAccordion from "../accordions/FaqAccordion";
import CareersAccordion from "../accordions/CareersAccordion";
import VEFFaqAccordion from "../accordions/VEFFaqAccordion";
import MMFFaqAccordion from "../accordions/MMFFaqAccordion";
import SGFFaqAccordion from "../accordions/SGFFaqAccordion";

const accordionComponents = {
    fund: FundAccordion,
    faq: FaqAccordion,
    careers: CareersAccordion,
    vef: VEFFaqAccordion,
    mmf: MMFFaqAccordion,
    sgf: SGFFaqAccordion,
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
    accordionProps?: any; // To pass down any additional props to the accordion component
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
                                                               title,
                                                               highlightedText,
                                                               description,
                                                               accordionType,
                                                               accordionProps,
                                                           }) => {
    const titleWords = title.split(" ");
    const AccordionComponent = accordionComponents[accordionType];

    return (
        <section className="bg-white px-4 py-8 md:p-20 2xl:px-40 2xl:py-20 flex flex-col gap-6 md:gap-16">
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
                {description && <p className="bodyText neutralText">{description}</p>}
            </div>
            <AccordionComponent {...accordionProps} />
        </section>
    );
};

export default AccordionSection;
