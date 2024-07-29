import React from "react";

interface HeroSectionProps {
  title: string;
  highlightedText: string;
  description: string;
  button1Text?: string;
  button2Text?: string;
  desktopImage: string;
  mobileImage: string;
  renderLeftContent?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  highlightedText,
  description,
  button1Text,
  button2Text,
  desktopImage,
  mobileImage,
  renderLeftContent = true,
}) => {
  const titleWords = title.split(" ");

  return (
    <section className="w-screen h-screen relative">
      <div className="">
        {renderLeftContent ? (
          <div className="absolute inset-0 flex flex-col md:justify-center px-4 md:px-20 2xl:px-40 gap-12 mt-24 z-0">
            <h1 className="titleText text-gray-600 md:w-[55%]">
              {titleWords.map((word, index) =>
                highlightedText.includes(word) ? (
                  <span key={index} className="primaryText">
                    {word}{" "}
                  </span>
                ) : (
                  <span key={index}>{word} </span>
                )
              )}
            </h1>
            <p className="bodyText neutralText md:w-[40%]">{description}</p>
            <div className="flex flex-col md:flex-row gap-4">
              {button1Text && (
                <button className="primary-button">{button1Text}</button>
              )}
              {button2Text && (
                <button className="secondary-button">{button2Text}</button>
              )}
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col md:justify-center md:ml-[40%] px-4 md:px-20 2xl:px-40 gap-12 mt-24 z-0">
            <h1 className="titleText text-gray-600">
              {titleWords.map((word, index) =>
                highlightedText.includes(word) ? (
                  <span key={index} className="primaryText">
                    {word}{" "}
                  </span>
                ) : (
                  <span key={index}>{word} </span>
                )
              )}
            </h1>
            <p className="bodyText neutralText">{description}</p>
            <div className="flex flex-col md:flex-row gap-4">
              {button1Text && (
                <button className="primary-button">{button1Text}</button>
              )}
              {button2Text && (
                <button className="secondary-button">{button2Text}</button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Desktop and Laptop Background Image */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center z-[-1]"
        style={{ backgroundImage: `url(${desktopImage})` }}
      />

      {/* Tablet and Mobile Background Image */}
      <div
        className="md:hidden absolute inset-0 bg-cover bg-center z-[-1]"
        style={{ backgroundImage: `url(${mobileImage})` }}
      />
    </section>
  );
};

export default HeroSection;
