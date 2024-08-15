import jbfLogo from "/logo.svg";
import React from "react";
import { Navbar, Dropdown } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const JBFNavbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLabelClick = () => {
    navigate("/private-wealth-management");
  };

  return (
    <Navbar
      fluid
      className="w-screen px-4 md:px-20 2xl:px-40 bg-white fixed z-10"
    >
      <Navbar.Brand href="/">
        <img src={jbfLogo} className="mr-3 h-6 sm:h-9" alt="JB Financial" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <a href="/contact" className="hidden md:block">
          <button className="secondary-button">Contact Us</button>
        </a>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href="/"
          className="switzer-md text-base text-[#1d1d1f] lg:mx-6"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          href="/about"
          className="switzer-md text-base text-gray-600 lg:mx-2"
        >
          About
        </Navbar.Link>
        <Navbar.Link
          href="/funds"
          className="switzer-md text-base text-gray-600 lg:mx-2"
        >
          Funds
        </Navbar.Link>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <span
              className="switzer-md text-base text-gray-600 lg:mx-2 cursor-pointer hidden md:block"
              onClick={handleLabelClick}
            >
              Private Wealth Management
            </span>
          }
        >
          <Dropdown.Item
            href="/private-asset-management"
            className="switzer-md text-base text-gray-600 hover:text-[#1d1d1f]"
          >
            Private Asset Management
          </Dropdown.Item>
          <Dropdown.Item
            href="/institutional-wealth-management"
            className="switzer-md text-base text-gray-600 hover:text-[#1d1d1f]"
          >
            Institutional Wealth Management
          </Dropdown.Item>
        </Dropdown>
        <div className="block md:hidden">
          <Navbar.Link
            href="/private-wealth-management"
            className="switzer-md text-base text-gray-600 lg:mx-2"
          >
            Private Wealth Management
          </Navbar.Link>
          <Navbar.Link
            href="/private-asset-management"
            className="switzer-md text-base text-gray-600 lg:mx-2"
          >
            Private Asset Management
          </Navbar.Link>
          <Navbar.Link
            href="/institutional-wealth-management"
            className="switzer-md text-base text-gray-600 lg:mx-2"
          >
            Institutional Wealth Management
          </Navbar.Link>
        </div>
        <Navbar.Link
          href="/team"
          className="switzer-md text-base text-gray-600 lg:mx-2"
        >
          Team
        </Navbar.Link>
        <Navbar.Link
          href="/careers"
          className="switzer-md text-base text-gray-600 lg:mx-2"
        >
          Careers
        </Navbar.Link>
        <Navbar.Link
          href="/contact"
          className="switzer-md text-base text-gray-600 lg:mx-2 block md:hidden"
        >
          Contact Us
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default JBFNavbar;
