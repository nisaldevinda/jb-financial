import React from "react";

interface TestimonialSectionProps {
  title?: string;
  description?: string;
  buttonText1?: string;
  buttonText2?: string;
  centerAlign?: boolean;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  title,
  description,
  buttonText1,
  buttonText2,
  centerAlign = false,
}) => {
  return (
    <section
      className={`bg-off-white border-y-2 border-neutral-lighter px-4 py-8 md:p-20 2xl:px-40 2xl:py-20 flex flex-col gap-4 md:gap-16 ${
        centerAlign ? "items-center text-center" : ""
      }`}
    >
      {title && <h2 className="subtitleText text-gray-600">{title}</h2>}
      {description && <p className="bodyText neutralText">{description}</p>}
      {(buttonText1 || buttonText2) && (
        <div className="flex flex-col gap-4 md:flex-row md:gap-8">
          {buttonText1 && (
            <button className="secondary-button">{buttonText1}</button>
          )}
          {buttonText2 && (
            <button className="primary-button">{buttonText2}</button>
          )}
        </div>
      )}
    </section>
  );
};

export default TestimonialSection;
