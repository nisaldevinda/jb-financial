import jbfLogo from "/logo.svg";
import React from "react";
import { Navbar } from "flowbite-react";

const JBFAdminNavbar: React.FC = () => {
  return (
    <Navbar
      fluid
      className="w-screen px-4 md:px-20 2xl:px-40 bg-white fixed z-1"
    >
      <Navbar.Brand href="/">
        <img src={jbfLogo} className="mr-3 h-6 sm:h-9" alt="JB Financial" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href="/admin"
          className="switzer-md text-base text-[#1d1d1f] lg:mx-6"
        >
          Login
        </Navbar.Link>
        <Navbar.Link
          href="/admin/funds"
          className="switzer-md text-base text-gray-600 lg:mx-4"
        >
          Funds
        </Navbar.Link>
        <Navbar.Link
          href="/admin/blogs"
          className="switzer-md text-base text-gray-600 lg:mx-4"
        >
          Blogs
        </Navbar.Link>
        <Navbar.Link
          href="/admin/careers"
          className="switzer-md text-base text-gray-600 lg:mx-4"
        >
          Careers
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default JBFAdminNavbar;
