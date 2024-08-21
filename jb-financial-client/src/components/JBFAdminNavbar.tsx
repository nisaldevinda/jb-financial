import jbfLogo from "/logo.svg";
import React from "react";
import { Navbar, Dropdown } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const JBFAdminNavbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLabelClick = () => {
    navigate("/private-wealth-management");
  };

  return (
    <Navbar
      fluid
      className="w-screen px-4 md:px-20 2xl:px-40 bg-white fixed top-0 left-0 z-10 shadow-md"
    >
      <Navbar.Brand href="/">
        <img src={jbfLogo} className="mr-3 h-6 sm:h-9" alt="JB Financial" />
      </Navbar.Brand>
      <div className="flex md:order-2 items-center">
        <a href="mailto:nisaldevindar@gmail.com" className="hidden md:block">
          <button className="secondary-button">Help</button>
        </a>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href="/admin"
          className="switzer-md text-base text-gray-800 lg:mx-6 py-2 hover:text-primary-800"
        >
          Login
        </Navbar.Link>
        <Navbar.Link
          href="/admin/funds"
          className="switzer-md text-base text-gray-600 lg:mx-4 py-2 hover:text-primary-800"
        >
          Funds
        </Navbar.Link>
        <Navbar.Link
          href="/admin/blogs"
          className="switzer-md text-base text-gray-600 lg:mx-4 py-2 hover:text-primary-800"
        >
          Blogs
        </Navbar.Link>
        <Navbar.Link
          href="/admin/careers"
          className="switzer-md text-base text-gray-600 lg:mx-4 py-2 hover:text-primary-800"
        >
          Careers
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default JBFAdminNavbar;
