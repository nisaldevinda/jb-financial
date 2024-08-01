import React from "react";

("use client");
import { Accordion } from "flowbite-react";

interface MMFFaqAccordionProps {}

const MMFFaqAccordion: React.FC<MMFFaqAccordionProps> = () => {
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
          What does the fund primarily invest in?
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <p className="bodyText neutralText">
            Short-term corporate issues like fixed deposits and commercial
            papers.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          Is this fund suitable for risk-averse investors?
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <p className="bodyText neutralText">
            Yes, it's designed for investors with low risk tolerance.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          How liquid is this fund?
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <p className="bodyText neutralText">
            Funds invested are highly liquid, and suitable for short-term
            investments.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          Are the returns taxable?
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <p className="bodyText neutralText">
            Yes, returns are subject to taxation based on the investor's
            residency status, but can change depending on applicable tax laws.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default MMFFaqAccordion;
