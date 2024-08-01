import React from "react";

("use client");
import { Accordion } from "flowbite-react";

interface SGFFaqAccordionProps {}

const SGFFaqAccordion: React.FC<SGFFaqAccordionProps> = () => {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          What is the minimum investment?
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <p className="bodyText neutralText">LKR 1 Million.</p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          What securities does this fund invest in?
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <p className="bodyText neutralText">
            Government securities like treasury bills and bonds.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          Is this fund regulated?
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <p className="bodyText neutralText">
            Yes, like all our other funds, it's regulated by the Securities and
            Exchange Commission of Sri Lanka.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          How does the risk level compare to other funds?
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <p className="bodyText neutralText">
            This fund has a lower risk compared to equity funds, and is almost
            on par with a regular bank savings account.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          Is this fund suitable for short-term investing?
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <p className="bodyText neutralText">
            Yes, it's designed for short-term investors seeking safety and
            liquidity.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default SGFFaqAccordion;
