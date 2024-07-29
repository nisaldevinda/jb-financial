import jbfLogo from "/logo.svg";

("use client");

import { Button, Navbar } from "flowbite-react";

function JBFFooter() {
  return (
    <div className="bg-neutral-lightest px-4 py-8 md:px-20 md:py-20 2xl:px-40 2xl:py-20 flex flex-col md:flex-row gap-6 md:gap-16">
      <div className="flex flex-col w-full md:w-1/4 items-start gap-4">
        <img src={jbfLogo} className="mr-3 h-6 sm:h-9" alt="JB Financial" />
        <p className="regularText neutralText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex flex-col w-full md:w-1/4 gap-4">
        <h1 className="switzer-sb text-base md:text-xl uppercase text-text-dark">
          Links
        </h1>
        <a href="" className="regularText neutralText">
          Link 1
        </a>
        <a href="" className="regularText neutralText">
          Link 2
        </a>
        <a href="" className="regularText neutralText">
          Link 3
        </a>
        <a href="" className="regularText neutralText">
          Link 4
        </a>
        <a href="" className="regularText neutralText">
          Link 5
        </a>
      </div>
      <div className="flex flex-col w-full md:w-1/4 gap-4">
        <h1 className="switzer-sb text-base md:text-xl uppercase text-text-dark">
          Resources
        </h1>
        <a href="" className="regularText neutralText">
          Link 1
        </a>
        <a href="" className="regularText neutralText">
          Link 2
        </a>
        <a href="" className="regularText neutralText">
          Link 3
        </a>
        <a href="" className="regularText neutralText">
          Link 4
        </a>
        <a href="" className="regularText neutralText">
          Link 5
        </a>
      </div>
      <div className="flex flex-col w-full md:w-1/4 gap-4 zodiak-r">
        Newsletter?
      </div>
    </div>
  );
}

export default JBFFooter;
