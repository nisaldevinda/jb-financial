import React from "react";

("use client");
import { Accordion } from "flowbite-react";

interface FaqAccordionProps {}

const FaqAccordion: React.FC<FaqAccordionProps> = () => {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-base md:text-2xl">
          What is a unit trust?
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <p className="bodyText neutralText">
            A unit trust is a collective investment scheme where investors'
            money is pooled together and professionally managed to invest in a
            diversified portfolio of securities.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          Is there a minimum investment?
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <p className="bodyText neutralText">
            The minimum investment is one million rupees.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          Are there any fees involved?
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <p className="bodyText neutralText">
            Yes, but they're very minimal. Check the fact sheet and prospectuses
            of each fund to know the exact amounts.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          Are unit trusts regulated?
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <p className="bodyText neutralText">
            Yes, unit trusts are regulated and monitored by the Securities and
            Exchange Commission (SEC) of Sri Lanka.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default FaqAccordion;
