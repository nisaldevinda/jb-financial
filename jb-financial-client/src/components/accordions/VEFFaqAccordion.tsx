import React from "react";

("use client");
import { Accordion } from "flowbite-react";

interface VEFFaqAccordionProps {}

const VEFFaqAccordion: React.FC<VEFFaqAccordionProps> = () => {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-base md:text-2xl">
          What is the minimum investment?
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <p className="bodyText neutralText">LKR 1 Million.</p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          What types of companies does the fund invest in?
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <p className="bodyText neutralText">
            Large and mid-capitalization companies in Sri Lanka.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          Is this fund suitable for short-term investors?
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <p className="bodyText neutralText">
            No, it's designed for medium to long-term investors.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          What is the risk level of this fund?
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <p className="bodyText neutralText">Moderate to high risk.</p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          Are there any fees involved?
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <p className="bodyText neutralText">
            Yes, front-end fees and other expenses detailed in the fund’s
            documents.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default VEFFaqAccordion;
