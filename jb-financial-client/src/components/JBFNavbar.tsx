import jbfLogo from "/logo.svg";

("use client");

import { Navbar } from "flowbite-react";

function JBFNavbar() {
  return (
    <Navbar fluid className="fixed w-screen px-4 md:px-20 2xl:px-40 bg-white">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={jbfLogo} className="mr-3 h-6 sm:h-9" alt="JB Financial" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span> */}
      </Navbar.Brand>
      <div className="flex md:order-2">
        <button className="secondary-button">Contact Us</button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="">
        <Navbar.Link
          href="#"
          className="switzer-md text-base text-[#1d1d1f] lg:mx-6"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="switzer-md text-base text-gray-600 lg:mx-4"
        >
          Funds
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="switzer-md text-base text-gray-600 lg:mx-4"
        >
          Resources
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="switzer-md text-base text-gray-600 lg:mx-4"
        >
          News
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="switzer-md text-base text-gray-600 lg:mx-4"
        >
          About
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default JBFNavbar;
