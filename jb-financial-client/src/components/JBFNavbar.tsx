import jbfLogo from "/logo.svg";
import React from "react";
import { Navbar, Dropdown } from "flowbite-react";
import { useLocation } from "react-router-dom";

const JBFNavbar: React.FC = () => {
  const location = useLocation();

  // Function to check if the current route matches the given href
  const isActive = (href: string) => location.pathname === href;

  return (
    <Navbar
      fluid
      className="w-screen px-4 md:px-8 lg:px-20 xl:px-40 bg-white fixed z-10 shadow-sm"
    >
      <Navbar.Brand href="/">
        <img src={jbfLogo} className="mr-3 h-6 sm:h-9" alt="JB Financial" />
      </Navbar.Brand>
      <div className="flex md:order-2 items-center gap-4 relative">
        {/* Contact Us Button as an Icon on smaller screens */}
        <a href="/contact" className="lg:block hidden">
          <button className="secondary-button">Contact Us</button>
        </a>
        <a href="/contact" className="block lg:hidden relative group">
          <img src="/icons/phone-contact.svg" alt="Contact Us" />
          <div className="absolute top-1/2 left-full transform -translate-y-1/2 ml-2 hidden group-hover:block p-2 bg-gray-400 text-white text-sm rounded shadow-lg switzer-r text-xs w-fit">
            Contact Us
          </div>
        </a>
        <a
          href="https://jbs.lk/"
          target="_blank"
          className="hidden md:block relative group"
        >
          <img src="/icons/sign-in.svg" alt="Sign In" />
          <div className="absolute top-1/2 left-full transform -translate-y-1/2 ml-2 hidden group-hover:block p-2 bg-gray-400 text-white text-sm rounded shadow-lg switzer-r text-xs w-fit">
            Online Trading Platform
          </div>
        </a>
        <Navbar.Toggle className="xl:hidden" />
      </div>

      <Navbar.Collapse>
        <Navbar.Link
          href="/"
          className={`switzer-md text-base ${
            isActive("/")
              ? "text-neutral-dark switzer-sb"
              : "text-neutral-mid hover:text-neutral-dark"
          } md:-mr-4 lg:mx-1`}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          href="/about"
          className={`switzer-md text-base ${
            isActive("/about")
              ? "text-neutral-dark switzer-sb"
              : "text-neutral-mid hover:text-neutral-dark"
          } md:-mr-4 lg:mx-1`}
        >
          About
        </Navbar.Link>
        <Navbar.Link
          href="/funds"
          className={`switzer-md text-base ${
            isActive("/funds")
              ? "text-neutral-dark switzer-sb"
              : "text-neutral-mid hover:text-neutral-dark"
          } md:-mr-4 lg:mx-1`}
        >
          Funds
        </Navbar.Link>

        {/* Updated Dropdown for Services */}
        <Dropdown
          arrowIcon={false} // Disable the arrow icon by default
          inline
          label={
            <div className="flex items-center">
              <span
                className={`switzer-md text-base ${
                  [
                    "/private-wealth-management",
                    "/private-asset-management",
                    "/institutional-wealth-management",
                  ].includes(location.pathname)
                    ? "text-neutral-dark switzer-sb"
                    : "text-neutral-mid hover:text-neutral-dark"
                } lg:mx-1 cursor-pointer hidden md:block`}
              >
                Services
              </span>
              <span className="hidden md:inline-flex">
                <svg
                  className="w-4 h-4 text-neutral-mid hover:text-neutral-dark ml-1 md:-mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
          }
        >
          <Dropdown.Item
            href="/private-wealth-management"
            className="switzer-md text-base text-neutral-mid hover:text-neutral-dark hover:text-[#1d1d1f]"
          >
            Private Wealth Management
          </Dropdown.Item>
          <Dropdown.Item
            href="/private-asset-management"
            className="switzer-md text-base text-neutral-mid hover:text-neutral-dark hover:text-[#1d1d1f]"
          >
            Private Asset Management
          </Dropdown.Item>
          <Dropdown.Item
            href="/institutional-wealth-management"
            className="switzer-md text-base text-neutral-mid hover:text-neutral-dark hover:text-[#1d1d1f]"
          >
            Institutional Wealth Management
          </Dropdown.Item>
        </Dropdown>

        {/* Links for Mobile and Tablet */}
        <div className="block md:hidden">
          <Navbar.Link
            href="/private-wealth-management"
            className={`switzer-md text-base ${
              isActive("/private-wealth-management")
                ? "text-neutral-dark switzer-sb"
                : "text-neutral-mid hover:text-neutral-dark"
            } lg:mx-1`}
          >
            Private Wealth Management
          </Navbar.Link>
          <Navbar.Link
            href="/private-asset-management"
            className={`switzer-md text-base ${
              isActive("/private-asset-management")
                ? "text-neutral-dark switzer-sb"
                : "text-neutral-mid hover:text-neutral-dark"
            } lg:mx-1`}
          >
            Private Asset Management
          </Navbar.Link>
          <Navbar.Link
            href="/institutional-wealth-management"
            className={`switzer-md text-base ${
              isActive("/institutional-wealth-management")
                ? "text-neutral-dark switzer-sb"
                : "text-neutral-mid hover:text-neutral-dark"
            } lg:mx-1`}
          >
            Institutional Wealth Management
          </Navbar.Link>
        </div>

        <Navbar.Link
          href="/team"
          className={`switzer-md text-base ${
            isActive("/team")
              ? "text-neutral-dark switzer-sb"
              : "text-neutral-mid hover:text-neutral-dark"
          } md:-mr-4 lg:mx-1`}
        >
          Team
        </Navbar.Link>
        <Navbar.Link
          href="/careers"
          className={`switzer-md text-base ${
            isActive("/careers")
              ? "text-neutral-dark switzer-sb"
              : "text-neutral-mid hover:text-neutral-dark"
          } md:-mr-4 lg:mx-1`}
        >
          Careers
        </Navbar.Link>
        <Navbar.Link
          href="/contact"
          className={`switzer-md text-base ${
            isActive("/contact")
              ? "text-neutral-dark switzer-sb"
              : "text-neutral-mid hover:text-neutral-dark"
          } lg:mx-1 block md:hidden`}
        >
          Contact Us
        </Navbar.Link>
        <Navbar.Link
          href="https://jbs.lk/"
          target="_blank"
          className="switzer-md text-base text-neutral-mid hover:text-neutral-dark lg:mx-1 block md:hidden"
        >
          Online Trading Platform
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default JBFNavbar;
