import React from "react";
import { Accordion } from "flowbite-react";

interface CareersAccordionProps {}

const CareersAccordion: React.FC<CareersAccordionProps> = () => {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          Administration
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <div className="flex flex-col p-4 md:p-12 gap-4 md:gap-12 border-b-2 border-neutral-lightest">
            <div className="flex flex-col gap-4">
              <h5 className="zodiak-r text-xl md:text-4xl text-neutral-mid">
                Senior Manager
              </h5>
              <p className="bodyText text-neutral-mid">Colombo, Sri Lanka</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex gap-2 md:gap-6 h-fit">
                <span className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg">
                  Full Time
                </span>
                <span className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg">
                  On Site
                </span>
                <span className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg">
                  Senior
                </span>
              </div>
              <a href="/careers/senior-manager">
                <button className="primary-button">Apply Now</button>
              </a>
            </div>
          </div>
          <div className="flex flex-col p-4 md:p-12 gap-4 md:gap-12 border-b-2 border-neutral-lightest">
            <div className="flex flex-col gap-4">
              <h5 className="zodiak-r text-xl md:text-4xl text-neutral-mid">
                Junior Manager
              </h5>
              <p className="bodyText text-neutral-mid">Colombo, Sri Lanka</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex gap-2 md:gap-6 h-fit">
                <span className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg">
                  Full Time
                </span>
                <span className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg">
                  On Site
                </span>
              </div>
              <button className="primary-button">Apply Now</button>
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          Sales
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <div className="flex flex-col p-4 md:p-12 gap-4 md:gap-12 border-b-2 border-neutral-lightest">
            <div className="flex flex-col gap-4">
              <h5 className="zodiak-r text-xl md:text-4xl text-neutral-mid">
                Sales Executive
              </h5>
              <p className="bodyText text-neutral-mid">Colombo, Sri Lanka</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex gap-2 md:gap-6 h-fit">
                <span className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg">
                  Full Time
                </span>
                <span className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg">
                  On Site
                </span>
              </div>
              <button className="primary-button">Apply Now</button>
            </div>
          </div>
          <div className="flex flex-col p-4 md:p-12 gap-4 md:gap-12 border-b-2 border-neutral-lightest">
            <div className="flex flex-col gap-4">
              <h5 className="zodiak-r text-xl md:text-4xl text-neutral-mid">
                Account Manager
              </h5>
              <p className="bodyText text-neutral-mid">Kandy, Sri Lanka</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex gap-2 md:gap-6 h-fit">
                <span className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg">
                  Full Time
                </span>
                <span className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg">
                  On Site
                </span>
              </div>
              <button className="primary-button">Apply Now</button>
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          Accounting
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <div className="flex flex-col p-4 md:p-12 gap-4 md:gap-12 border-b-2 border-neutral-lightest">
            <div className="flex flex-col gap-4">
              <h5 className="zodiak-r text-xl md:text-4xl text-neutral-mid">
                Accountant
              </h5>
              <p className="bodyText text-neutral-mid">Galle, Sri Lanka</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex gap-2 md:gap-6 h-fit">
                <span className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg">
                  Full Time
                </span>
                <span className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg">
                  On Site
                </span>
              </div>
              <button className="primary-button">Apply Now</button>
            </div>
          </div>
          <div className="flex flex-col p-4 md:p-12 gap-4 md:gap-12 border-b-2 border-neutral-lightest">
            <div className="flex flex-col gap-4">
              <h5 className="zodiak-r text-xl md:text-4xl text-neutral-mid">
                Financial Analyst
              </h5>
              <p className="bodyText text-neutral-mid">Colombo, Sri Lanka</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex gap-2 md:gap-6 h-fit">
                <span className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg">
                  Full Time
                </span>
                <span className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg">
                  On Site
                </span>
              </div>
              <button className="primary-button">Apply Now</button>
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          Finance
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <div className="flex flex-col p-4 md:p-12 gap-4 md:gap-12 border-b-2 border-neutral-lightest">
            <div className="flex flex-col gap-4">
              <h5 className="zodiak-r text-xl md:text-4xl text-neutral-mid">
                Investment Analyst
              </h5>
              <p className="bodyText text-neutral-mid">Colombo, Sri Lanka</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex gap-2 md:gap-6 h-fit">
                <span className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg">
                  Full Time
                </span>
                <span className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg">
                  On Site
                </span>
              </div>
              <button className="primary-button">Apply Now</button>
            </div>
          </div>
          <div className="flex flex-col p-4 md:p-12 gap-4 md:gap-12 border-b-2 border-neutral-lightest">
            <div className="flex flex-col gap-4">
              <h5 className="zodiak-r text-xl md:text-4xl text-neutral-mid">
                Portfolio Manager
              </h5>
              <p className="bodyText text-neutral-mid">Kandy, Sri Lanka</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex gap-2 md:gap-6 h-fit">
                <span className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg">
                  Full Time
                </span>
                <span className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg">
                  On Site
                </span>
              </div>
              <button className="primary-button">Apply Now</button>
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="switzer-sb text-neutral-light focus:text-primary-800 text-base md:text-2xl">
          Marketing
        </Accordion.Title>
        <Accordion.Content className="p-6">
          <div className="flex flex-col p-4 md:p-12 gap-4 md:gap-12 border-b-2 border-neutral-lightest">
            <div className="flex flex-col gap-4">
              <h5 className="zodiak-r text-xl md:text-4xl text-neutral-mid">
                Marketing Specialist
              </h5>
              <p className="bodyText text-neutral-mid">Colombo, Sri Lanka</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex gap-2 md:gap-6 h-fit">
                <span className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg">
                  Full Time
                </span>
                <span className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg">
                  On Site
                </span>
              </div>
              <button className="primary-button">Apply Now</button>
            </div>
          </div>
          <div className="flex flex-col p-4 md:p-12 gap-4 md:gap-12 border-b-2 border-neutral-lightest">
            <div className="flex flex-col gap-4">
              <h5 className="zodiak-r text-xl md:text-4xl text-neutral-mid">
                Social Media Manager
              </h5>
              <p className="bodyText text-neutral-mid">Jaffna, Sri Lanka</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex gap-2 md:gap-6 h-fit">
                <span className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg">
                  Full Time
                </span>
                <span className="switzer-sb text-xs md:text-base text-neutral-mid uppercase px-3 md:px-6 py-2 border border-neutral-mid rounded-lg">
                  Remote
                </span>
              </div>
              <button className="primary-button">Apply Now</button>
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default CareersAccordion;
