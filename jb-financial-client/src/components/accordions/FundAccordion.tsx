import React from "react";

("use client");
import { Accordion } from "flowbite-react";
import accimg from "/acc1.jpg";

interface FaqAccordionProps {}

const FaqAccordion: React.FC<FaqAccordionProps> = () => {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          Young Professional
        </Accordion.Title>
        <Accordion.Content>
          <div className="flex flex-col md:flex-row gap-12 justify-between">
            <div className="flex-grow flex flex-col gap-12">
              <p className="bodyText neutralText">
                You've just started doing well in your career, and you've got
                many decades of professional life ahead of you. You can afford
                to take a little more risk, so we recommend allocating a higher
                proportion of funds into the JB Vantage Value Equity Fund.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col flex-grow gap-0 md:gap-6">
                  <h4 className="switzer-sb text-base md:text-2xl text-neutral-dark uppercase">
                    Equity Markets
                  </h4>
                  <p className="zodiak-r text-2xl md:text-[64px] text-primary-900">
                    80%
                  </p>
                </div>
                <div className="flex flex-col flex-grow gap-0 md:gap-6">
                  <h4 className="switzer-sb text-base md:text-2xl text-neutral-dark uppercase">
                    Money and Debt Market
                  </h4>
                  <p className="zodiak-r text-2xl md:text-[64px] text-primary-900">
                    20%
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-none w-120">
              <img src={accimg} className="" alt="card-1-image" />
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          Mid Career Professional
        </Accordion.Title>
        <Accordion.Content>
          <div className="flex flex-col md:flex-row gap-12 justify-between">
            <div className="flex-grow flex flex-col gap-12">
              <p className="bodyText neutralText">
                You've just started doing well in your career, and you've got
                many decades of professional life ahead of you. You can afford
                to take a little more risk, so we recommend allocating a higher
                proportion of funds into the JB Vantage Value Equity Fund.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col flex-grow gap-0 md:gap-6">
                  <h4 className="switzer-sb text-base md:text-2xl text-neutral-dark uppercase">
                    Equity Markets
                  </h4>
                  <p className="zodiak-r text-2xl md:text-[64px] text-primary-900">
                    80%
                  </p>
                </div>
                <div className="flex flex-col flex-grow gap-0 md:gap-6">
                  <h4 className="switzer-sb text-base md:text-2xl text-neutral-dark uppercase">
                    Money and Debt Market
                  </h4>
                  <p className="zodiak-r text-2xl md:text-[64px] text-primary-900">
                    20%
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-none w-120">
              <img src={accimg} className="" alt="card-1-image" />
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          Senior Professional
        </Accordion.Title>
        <Accordion.Content>
          <div className="flex flex-col md:flex-row gap-12 justify-between">
            <div className="flex-grow flex flex-col gap-12">
              <p className="bodyText neutralText">
                You've just started doing well in your career, and you've got
                many decades of professional life ahead of you. You can afford
                to take a little more risk, so we recommend allocating a higher
                proportion of funds into the JB Vantage Value Equity Fund.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col flex-grow gap-0 md:gap-6">
                  <h4 className="switzer-sb text-base md:text-2xl text-neutral-dark uppercase">
                    Equity Markets
                  </h4>
                  <p className="zodiak-r text-2xl md:text-[64px] text-primary-900">
                    80%
                  </p>
                </div>
                <div className="flex flex-col flex-grow gap-0 md:gap-6">
                  <h4 className="switzer-sb text-base md:text-2xl text-neutral-dark uppercase">
                    Money and Debt Market
                  </h4>
                  <p className="zodiak-r text-2xl md:text-[64px] text-primary-900">
                    20%
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-none w-120">
              <img src={accimg} className="" alt="card-1-image" />
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          Retired Individuals
        </Accordion.Title>
        <Accordion.Content>
          <div className="flex flex-col md:flex-row gap-12 justify-between">
            <div className="flex-grow flex flex-col gap-12">
              <p className="bodyText neutralText">
                You've just started doing well in your career, and you've got
                many decades of professional life ahead of you. You can afford
                to take a little more risk, so we recommend allocating a higher
                proportion of funds into the JB Vantage Value Equity Fund.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col flex-grow gap-0 md:gap-6">
                  <h4 className="switzer-sb text-base md:text-2xl text-neutral-dark uppercase">
                    Equity Markets
                  </h4>
                  <p className="zodiak-r text-2xl md:text-[64px] text-primary-900">
                    80%
                  </p>
                </div>
                <div className="flex flex-col flex-grow gap-0 md:gap-6">
                  <h4 className="switzer-sb text-base md:text-2xl text-neutral-dark uppercase">
                    Money and Debt Market
                  </h4>
                  <p className="zodiak-r text-2xl md:text-[64px] text-primary-900">
                    20%
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-none w-120">
              <img src={accimg} className="" alt="card-1-image" />
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          Corporate Treasurers
        </Accordion.Title>
        <Accordion.Content>
          <div className="flex flex-col md:flex-row gap-12 justify-between">
            <div className="flex-grow flex flex-col gap-12">
              <p className="bodyText neutralText">
                You've just started doing well in your career, and you've got
                many decades of professional life ahead of you. You can afford
                to take a little more risk, so we recommend allocating a higher
                proportion of funds into the JB Vantage Value Equity Fund.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col flex-grow gap-0 md:gap-6">
                  <h4 className="switzer-sb text-base md:text-2xl text-neutral-dark uppercase">
                    Equity Markets
                  </h4>
                  <p className="zodiak-r text-2xl md:text-[64px] text-primary-900">
                    80%
                  </p>
                </div>
                <div className="flex flex-col flex-grow gap-0 md:gap-6">
                  <h4 className="switzer-sb text-base md:text-2xl text-neutral-dark uppercase">
                    Money and Debt Market
                  </h4>
                  <p className="zodiak-r text-2xl md:text-[64px] text-primary-900">
                    20%
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-none w-120">
              <img src={accimg} className="" alt="card-1-image" />
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default FaqAccordion;
