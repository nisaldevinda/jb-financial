import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import jbfLogo from "/logo.svg";
import card1img from "/card-1.png";
import card2img from "/card-2.png";
import card3img from "/card-3.png";
import pwmimg from "/a1.png";
import awrdsimg from "/a2.png";
import cfaimg from "/cfa.png";
import "./App.css";

("use client");

import { Button, Navbar } from "flowbite-react";
import { Card } from "flowbite-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Navbar fluid className="z-1">
        <Navbar.Brand href="https://flowbite-react.com">
          <img src={jbfLogo} className="mr-3 h-6 sm:h-9" alt="JB Financial" />
          {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span> */}
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button as="button" className="secondary-button">
            Contact Us
          </Button>
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
      <section className="w-screen h-screen relative mt-[-64px] z-[-1] ">
        {/* Desktop and Laptop Background Image */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/hero-d.jpg")' }}
        />

        {/* Tablet and Mobile Background Image */}
        <div
          className="md:hidden absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/hero-m.jpg")' }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-20 gap-12">
          <h1 className="titleText w-[50%] text-gray-600">
            Reach your <span className="primaryText">financial goals</span> with
            ease.
          </h1>
          <p className="bodyText neutralText w-[40%]">
            With our investment products, anyone can easily invest and grow
            their wealth. Take advantage of our diverse range of investment
            options which includes both unit trusts and private wealth
            management services.
          </p>
          <Button as="button" className="primary-button">
            SCHEDULE AN APPOINTMENT
          </Button>
        </div>
      </section>
      <section className="bg-white p-20 flex flex-col gap-16 items-center">
        <h2 className="subtitleText text-gray-600">
          Explore our <span className="primaryText">Unit Trusts</span>
        </h2>
        <div className="flex justify-between gap-12">
          {/* Card 01 */}
          <div className="flex flex-col bg-[#fbfbfd] rounded-2xl border-2 border-solid border-gray-300">
            <div className="flex flex-col px-4 py-6">
              <span className="regularText">JB Vantage</span>
              <span className="switzer-sb text-2xl primaryText">
                Value Equity Fund
              </span>
            </div>
            <img src={card1img} className="" alt="card-1-image" />
            <div className="flex flex-col gap-6 px-4 pt-9 pb-6">
              <p className="regularText neutralText">
                Invest in equities of publicly listed companies in Sri Lanka and
                benefit from our rigorous research deep dive research
                methodology.
              </p>
              <a href="" className="switzer-md ">
                Learn More
              </a>
            </div>
          </div>

          {/* Card 02 */}
          <div className="flex flex-col bg-[#fbfbfd] rounded-2xl border-2 border-solid border-gray-300">
            <div className="flex flex-col px-4 py-6">
              <span className="regularText">JB Vantage</span>
              <span className="switzer-sb text-2xl primaryText">
                Money Market Fund
              </span>
            </div>
            <img src={card2img} className="" alt="card-1-image" />
            <div className="flex flex-col gap-6 px-4 pt-9 pb-6">
              <p className="regularText neutralText">
                Invest in equities of publicly listed companies in Sri Lanka and
                benefit from our rigorous research deep dive research
                methodology.
              </p>
              <a href="" className="switzer-md ">
                Learn More
              </a>
            </div>
          </div>

          {/* Card 03 */}
          <div className="flex flex-col bg-[#fbfbfd] rounded-2xl border-2 border-solid border-gray-300">
            <div className="flex flex-col px-4 py-6">
              <span className="regularText">JB Vantage</span>
              <span className="switzer-sb text-2xl primaryText">
                Short Term Gilt Fund
              </span>
            </div>
            <img src={card3img} className="" alt="card-1-image" />
            <div className="flex flex-col gap-6 px-4 pt-9 pb-6">
              <p className="regularText neutralText">
                Invest in equities of publicly listed companies in Sri Lanka and
                benefit from our rigorous research deep dive research
                methodology.
              </p>
              <a href="" className="switzer-md ">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <Button as="button" className="secondary-button">
          View All Funds
        </Button>
      </section>
      <section className="bg-white p-20 flex gap-16">
        <div className="flex flex-col justify-center gap-12 w-[60%]">
          <h2 className="subtitleText primaryText">
            Private Wealth Management
          </h2>
          <p className="bodyText neutralText w-[80%]">
            Invest in equities of publicly listed companies in Sri Lanka and
            benefit from our rigorous research deep dive research methodology.
          </p>
          <Button as="button" className="secondary-button w-[260px]">
            Learn More
          </Button>
        </div>
        <div className="w-[40%]">
          <img src={pwmimg} className="" alt="card-1-image" />
        </div>
      </section>

      <section className="bg-white p-20 flex gap-16">
        <div className="w-[40%]">
          <img src={awrdsimg} className="" alt="card-1-image" />
        </div>
        <div className="flex flex-col justify-center gap-12 w-[60%]">
          <h2 className="subtitleText text-gray-600">
            Experienced & <span className="primaryText">Award Winning</span>
          </h2>
          <p className="bodyText neutralText w-[80%]">
            Our investment committee consists of some of the most experienced
            and well-known names in Sri Lanka's financial services sector.
          </p>
          <div className="flex">
            <div className="flex flex-col gap-4">
              <span className="switzer-sb text-2xl primaryText">
                Recognized by CFA
              </span>
              <p className="regularText neutralText w-[80%]">
                Our investment committee consists of some of the most
                experienced and well-known names in Sri Lanka's financial
                services sector.
              </p>
            </div>
            <div>
              <img src={cfaimg} className="" alt="card-1-image" />
            </div>
          </div>
          <Button as="button" className="secondary-button w-[260px]">
            Learn More
          </Button>
        </div>
      </section>
    </>
  );
}

export default App;
