import jbfLogo from "/logo.svg";

("use client");

import { Navbar } from "flowbite-react";

function JBFNavbar() {
  return (
    <Navbar
      fluid
      className="w-screen px-4 md:px-20 2xl:px-40 bg-white fixed z-1"
    >
      <Navbar.Brand href="/">
        <img src={jbfLogo} className="mr-3 h-6 sm:h-9" alt="JB Financial" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <a href="/contact">
          <button className="secondary-button">Contact Us</button>
        </a>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="">
        <Navbar.Link
          href="/"
          className="switzer-md text-base text-[#1d1d1f] lg:mx-6"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          href="/about"
          className="switzer-md text-base text-gray-600 lg:mx-4"
        >
          About
        </Navbar.Link>
        <Navbar.Link
          href="/funds"
          className="switzer-md text-base text-gray-600 lg:mx-4"
        >
          Funds
        </Navbar.Link>
        <Navbar.Link
          href="/blog"
          className="switzer-md text-base text-gray-600 lg:mx-4"
        >
          Resources
        </Navbar.Link>
        <Navbar.Link
          href="/team"
          className="switzer-md text-base text-gray-600 lg:mx-4"
        >
          Team
        </Navbar.Link>
        <Navbar.Link
          href="/careers"
          className="switzer-md text-base text-gray-600 lg:mx-4"
        >
          Careers
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default JBFNavbar;
