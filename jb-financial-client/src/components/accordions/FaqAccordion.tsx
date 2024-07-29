import React from "react";

("use client");
import { Accordion } from "flowbite-react";

interface AnotherAccordionProps {}

const AnotherAccordion: React.FC<AnotherAccordionProps> = () => {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-2xl">
          What is a unit trust?
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <p className="bodyText neutralText">
            You've just started doing well in your career, and you've got many
            decades of professional life ahead of you. You can afford to take a
            little more risk, so we recommend allocating a higher proportion of
            funds into the JB Vantage Value Equity Fund.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-2xl">
          How can I invest?
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <p className="bodyText neutralText">
            You've just started doing well in your career, and you've got many
            decades of professional life ahead of you. You can afford to take a
            little more risk, so we recommend allocating a higher proportion of
            funds into the JB Vantage Value Equity Fund.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-2xl">
          What is the minimum investment?
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <p className="bodyText neutralText">
            You've just started doing well in your career, and you've got many
            decades of professional life ahead of you. You can afford to take a
            little more risk, so we recommend allocating a higher proportion of
            funds into the JB Vantage Value Equity Fund.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-2xl">
          How often are dividends paid?
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <p className="bodyText neutralText">
            You've just started doing well in your career, and you've got many
            decades of professional life ahead of you. You can afford to take a
            little more risk, so we recommend allocating a higher proportion of
            funds into the JB Vantage Value Equity Fund.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-2xl">
          Are there any fees involved?
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <p className="bodyText neutralText">
            You've just started doing well in your career, and you've got many
            decades of professional life ahead of you. You can afford to take a
            little more risk, so we recommend allocating a higher proportion of
            funds into the JB Vantage Value Equity Fund.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default AnotherAccordion;
