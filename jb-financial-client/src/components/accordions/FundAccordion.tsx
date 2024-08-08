import React from "react";

("use client");
import { Accordion } from "flowbite-react";

interface FundAccordionProps {}

const FundAccordion: React.FC<FundAccordionProps> = () => {
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
              <img
                src="/images/strategies/young.jpg"
                className="rounded-xl md:rounded-2xl"
                alt="card-1-image"
              />
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
                Your career is progressing well and with some years under your
                belt, you’re starting to think about your family and its future.
                You want the best of both worlds, so we recommend a balanced
                allocation into our money market and equity funds.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col flex-grow gap-0 md:gap-6">
                  <h4 className="switzer-sb text-base md:text-2xl text-neutral-dark uppercase">
                    Equity Markets
                  </h4>
                  <p className="zodiak-r text-2xl md:text-[64px] text-primary-900">
                    50%
                  </p>
                </div>
                <div className="flex flex-col flex-grow gap-0 md:gap-6">
                  <h4 className="switzer-sb text-base md:text-2xl text-neutral-dark uppercase">
                    Money and Debt Market
                  </h4>
                  <p className="zodiak-r text-2xl md:text-[64px] text-primary-900">
                    50%
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-none w-120">
              <img
                src="/images/strategies/mid-career.jpg"
                className="rounded-xl md:rounded-2xl"
                alt="card-1-image"
              />
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
                You’ve made it to the top and retirement is on your mind. You
                don’t want to take too many risks, but still have some capacity
                to do so. We recommend investing more into our money market
                funds and perhaps a little into equity.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col flex-grow gap-0 md:gap-6">
                  <h4 className="switzer-sb text-base md:text-2xl text-neutral-dark uppercase">
                    Equity Markets
                  </h4>
                  <p className="zodiak-r text-2xl md:text-[64px] text-primary-900">
                    20%
                  </p>
                </div>
                <div className="flex flex-col flex-grow gap-0 md:gap-6">
                  <h4 className="switzer-sb text-base md:text-2xl text-neutral-dark uppercase">
                    Money and Debt Market
                  </h4>
                  <p className="zodiak-r text-2xl md:text-[64px] text-primary-900">
                    80%
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-none w-120">
              <img
                src="/images/strategies/senior.jpg"
                className="rounded-xl md:rounded-2xl"
                alt="card-1-image"
              />
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
                Time to enjoy the sunset of your life. Conservatism in how you
                invest is prudent, and we recommend allocating a higher
                proportion of funds into the JB Vantage Money Market Fund.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col flex-grow gap-0 md:gap-6">
                  <h4 className="switzer-sb text-base md:text-2xl text-neutral-dark uppercase">
                    Equity Markets
                  </h4>
                  <p className="zodiak-r text-2xl md:text-[64px] text-primary-900">
                    0%
                  </p>
                </div>
                <div className="flex flex-col flex-grow gap-0 md:gap-6">
                  <h4 className="switzer-sb text-base md:text-2xl text-neutral-dark uppercase">
                    Money and Debt Market
                  </h4>
                  <p className="zodiak-r text-2xl md:text-[64px] text-primary-900">
                    100%
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-none w-120">
              <img
                src="/images/strategies/retired.jpg"
                className="rounded-xl md:rounded-2xl"
                alt="card-1-image"
              />
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
                You have some excess cash which you would rather put to work
                than leave lying around in a low-yield bank account. Our money
                market funds are highly recommended.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col flex-grow gap-0 md:gap-6">
                  <h4 className="switzer-sb text-base md:text-2xl text-neutral-dark uppercase">
                    Equity Markets
                  </h4>
                  <p className="zodiak-r text-2xl md:text-[64px] text-primary-900">
                    0%
                  </p>
                </div>
                <div className="flex flex-col flex-grow gap-0 md:gap-6">
                  <h4 className="switzer-sb text-base md:text-2xl text-neutral-dark uppercase">
                    Money and Debt Market
                  </h4>
                  <p className="zodiak-r text-2xl md:text-[64px] text-primary-900">
                    100%
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-none w-120">
              <img
                src="/images/strategies/corporate.jpg"
                className="rounded-xl md:rounded-2xl"
                alt=""
              />
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default FundAccordion;
